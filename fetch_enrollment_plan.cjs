/**
 * 批量查询招生计划数据
 * 使用静态学校列表获取ID + Detail API查询专业招生计划
 * Detail API: POST https://api-gaokao.zjzw.cn/apidata/web (JSON body)
 */
const https = require('https');
const CryptoJS = require('crypto-js');
const md5 = require('js-md5');
const fs = require('fs');
const path = require('path');

const SIGN_KEY = 'D23ABC@#56';
const DETAIL_HOST = 'api-gaokao.zjzw.cn';
const DETAIL_PATH = '/apidata/web';
const DETAIL_BASE = 'https://api-gaokao.zjzw.cn/apidata/web';

function genSign(baseUrl, params) {
  const sorted = Object.keys(params).sort();
  const qs = sorted.map(k => `${k}=${params[k] === undefined ? '' : params[k]}`).join('&');
  const full = baseUrl + '?' + qs;
  const clean = full.replace(/^\/|https?:\/\/\/?/, '');
  const decoded = decodeURI(clean);
  const hmac = CryptoJS.HmacSHA1(CryptoJS.enc.Utf8.parse(decoded), SIGN_KEY);
  const b64 = CryptoJS.enc.Base64.stringify(hmac).toString();
  return md5(b64);
}

// 登录凭据（从浏览器获取，勿提交 git、勿外发）
// 用法: node fetch_enrollment_plan.cjs <User-Sign> [token]
//   User-Sign 必填：登录掌上高考后，F12→Network→任意 api-gaokao.zjzw.cn/apidata/web 请求头
//   token    可选：Cookie 里 _token.gaokao 的值（实测仅 User-Sign 即可成功）
const USER_SIGN = process.argv[2] || '';
const AUTH_TOKEN = process.argv[3] || '';
const COOKIE = AUTH_TOKEN ? `_token.gaokao=${AUTH_TOKEN}; _token.common=${AUTH_TOKEN}` : '';
if (!USER_SIGN) {
  console.error('用法: node fetch_enrollment_plan.cjs <User-Sign> [token]');
  console.error('User-Sign 必填（apidata/web 接口登录态身份签名，服务端下发，session 内固定）');
  process.exit(1);
}

function postJson(hostname, apiPath, params) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(params);
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Referer': 'https://www.gaokao.cn/',
      'Origin': 'https://www.gaokao.cn',
      // User-Sign：apidata/web 接口必需，服务端登录后下发，session 内固定
      'User-Sign': USER_SIGN,
    };
    if (COOKIE) {
      headers['Cookie'] = COOKIE;
      headers['token'] = AUTH_TOKEN;
      headers['login-version'] = '1';
    }
    const opts = { hostname, path: apiPath, method: 'POST', headers };
    const req = https.request(opts, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); }
        catch (e) { reject(new Error('Parse: ' + d.substring(0, 200))); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function httpGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function getDetail(schoolId, year, page) {
  const p = {
    autosign: '', like_spname: '', local_batch_id: '14', local_province_id: '13',
    local_type_id: '2073', page: String(page || 1), platform: '2',
    school_id: String(schoolId), size: '100', sp_xuanke: '', special_group: '',
    uri: 'v1/school/special_plan', year: String(year),
  };
  p.signsafe = genSign(DETAIL_BASE, p);
  return postJson(DETAIL_HOST, DETAIL_PATH, p);
}

const TARGET = [
  '北京大学','清华大学','复旦大学','上海交通大学','浙江大学',
  '中国科学技术大学','南京大学','中国人民大学','北京航空航天大学','北京理工大学',
  '哈尔滨工业大学','西安交通大学','武汉大学','华中科技大学','中山大学',
  '四川大学','南开大学','天津大学','东南大学','厦门大学',
  '同济大学','山东大学','大连理工大学','吉林大学','中南大学',
  '湖南大学','重庆大学','电子科技大学','华南理工大学','西北工业大学',
  '兰州大学','东北大学','中国农业大学','中国海洋大学','北京师范大学',
  '华东师范大学','西北农林科技大学','中央民族大学','北京大学医学部',
  '北京邮电大学','北京交通大学','北京科技大学','北京化工大学','北京工业大学',
  '北京林业大学','北京中医药大学','北京外国语大学','中国传媒大学','中央财经大学',
  '对外经济贸易大学','中国政法大学','华北电力大学',
  '上海财经大学','上海外国语大学','上海大学','东华大学','华东理工大学',
  '南京航空航天大学','南京理工大学','河海大学','南京师范大学','苏州大学',
  '江南大学','中国药科大学','南京农业大学',
  '武汉理工大学','华中师范大学','华中农业大学','中南财经政法大学','中国地质大学',
  '西南交通大学','西南财经大学','四川农业大学','湖南师范大学',
  '暨南大学','华南师范大学','天津医科大学','大连海事大学','辽宁大学',
  '东北师范大学','延边大学','东北林业大学',
  '郑州大学','河北工业大学','太原理工大学','内蒙古大学',
  '合肥工业大学','安徽大学','福州大学','南昌大学','海南大学','西南大学',
  '贵州大学','西藏大学','青海大学','宁夏大学','新疆大学','石河子大学',
  '中国石油大学','中国矿业大学','长安大学','陕西师范大学',
];

const YEARS = [2021, 2022, 2023, 2024, 2025, 2026];

async function main() {
  // 冒烟模式：SMOKE=1 时只抓 3 校 2026 年，输出到独立文件，便于改完快速验证
  const targets = process.env.SMOKE ? ['北京大学', '四川大学', '吉林大学'] : TARGET;
  const years = process.env.SMOKE ? [2026] : YEARS;
  const outFile = process.env.SMOKE ? 'enrollment_plan_smoke.json' : 'enrollment_plan.json';

  // 1. 获取学校ID映射
  console.log(`获取学校列表...${process.env.SMOKE ? ' [SMOKE 模式]' : ''}`);
  const listResp = await httpGet('https://static-data.gaokao.cn/www/2.0/school/list_v2.json?a=www.gaokao.cn');
  const schoolMap = {};
  for (const [id, info] of Object.entries(listResp.data)) {
    if (info.name) schoolMap[info.name] = id;
  }
  console.log(`学校库: ${Object.keys(schoolMap).length} 所`);

  // 找到目标学校的ID
  const schoolIds = {};
  const missing = [];
  for (const name of targets) {
    if (schoolMap[name]) schoolIds[name] = schoolMap[name];
    else missing.push(name);
  }
  console.log(`匹配: ${Object.keys(schoolIds).length}/${targets.length}`);
  if (missing.length) console.log('未匹配:', missing.join(', '));

  // 2. 批量查询
  const results = {};
  let ok = 0, fail = 0;

  for (let i = 0; i < targets.length; i++) {
    const name = targets[i];
    const sid = schoolIds[name];
    if (!sid) { console.log(`[${i+1}/${targets.length}] ${name}: 无ID，跳过`); continue; }

    console.log(`\n[${i+1}/${targets.length}] ${name} (ID:${sid})`);
    const uni = {};

    for (const year of years) {
      try {
        // 翻页基于 fetched（已抓取的原始条目数）而非 majors.length，
        // 因为 zslx_name 过滤会使 majors.length < numFound，用前者控制翻页会卡死
        let majors = [], pg = 1, numFound = 0, fetched = 0;
        do {
          const r = await getDetail(sid, year, pg);
          await sleep(1500); // 防 1069 频控（文档 7.2 建议 ≥1.5s）
          if ((r.code !== '0000' && r.code !== 0) || !r.data) {
            console.log(`  ${year}: 错误[${r.code}] ${r.message || ''}`);
            fail++;
            break;
          }
          numFound = r.data.numFound || 0;
          const items = r.data.item || [];
          fetched += items.length;
          for (const m of items) {
            // 仅保留普通类，排除专项计划/中外合作办学等特殊招生类型
            if ((m.zslx_name || '') !== '普通类') continue;
            majors.push({
              major: m.sp_name,
              planNum: parseInt(m.num) || 0,
              length: m.length || '',
              tuition: m.tuition || '',
              xuanke: m.sg_info || '',
              remark: m.remark || '',
            });
          }
          pg++;
        } while (fetched < numFound && pg <= 50);

        const totalPlan = majors.reduce((s, m) => s + m.planNum, 0);
        uni[year] = { schoolId: sid, totalPlan, majorCount: majors.length, numFound, majors };
        console.log(`  ${year}: ${totalPlan}人, ${majors.length}专业 (API共${numFound}) ✓`);
        ok++;
      } catch (e) {
        console.log(`  ${year}: ${e.message}`);
        fail++;
      }
    }
    results[name] = uni;

    if ((i+1) % 5 === 0 || i === targets.length - 1) {
      const pp = path.join(__dirname, 'raw_data', 'enrollment_plan_progress.json');
      fs.writeFileSync(pp, JSON.stringify({done:i+1,total:targets.length,ok,fail,results}, null, 2), 'utf-8');
      console.log(`\n[保存] ${i+1}/${targets.length}`);
    }
  }

  const out = path.join(__dirname, 'raw_data', outFile);
  fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\n\n===== 完成 =====`);
  console.log(`学校: ${targets.length}, 成功: ${ok}, 失败: ${fail}`);
  console.log(`输出: ${out}`);
}

main().catch(console.error);
