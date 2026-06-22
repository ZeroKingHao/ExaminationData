// 将官方数据转换为前端数据文件
const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'raw_data', 'official_data.json'), 'utf-8'));

// 合并所有年份数据
const rawRecords = [];
Object.entries(raw).forEach(([year, records]) => {
  rawRecords.push(...records);
});

console.log(`Total raw records: ${rawRecords.length}`);

// ====== 数据清洗：排除非普通批次招生记录 ======
// 1. 排除专项计划、中外合作办学、预科班等非普通批次专业
function isSpecialPlanMajor(major) {
  const m = major;
  if (m.includes('中外合作办学')) return true;  // 中外合作办学（所有形式）
  if (m.includes('预科班')) return true;         // 少数民族预科班
  if (m.includes('国家专项')) return true;       // 国家专项计划
  if (m.includes('地方专项')) return true;       // 地方专项计划
  if (m.includes('高校专项')) return true;       // 高校专项计划
  if (/合作专项/.test(m)) return true;           // 国际合作专项等
  return false;
}

// 2. 排除独立学院（XX大学XX学院等独立法人机构，不含985/211本校的医学院/分校区）
//    注：当前数据中未发现真正的独立学院（三本），以下为防御性过滤
const KNOWN_AFFILIATED_COLLEGES = new Set([
  '北京协和医学院',      // 清华大学附属，985
  '上海交通大学医学院',  // 上海交通大学直属
  '北京大学医学部',      // 北京大学直属
  '浙江大学医学院',      // 浙江大学直属
]);
function isIndependentCollege(university) {
  // 已知的985/211本校医学院/医学部不是独立学院
  if (KNOWN_AFFILIATED_COLLEGES.has(university)) return false;
  // 名称中包含"学院"但前面没有"大学"的，可能是独立学院
  // 但当前数据集中所有此类记录均为正规985/211附属机构，此处做防御性保留
  return false;
}

const allRecords = rawRecords.filter(r => {
  if (isSpecialPlanMajor(r.major)) return false;
  if (isIndependentCollege(r.university)) return false;
  return true;
});

const filteredCount = rawRecords.length - allRecords.length;
console.log(`Filtered out: ${filteredCount} records (special plans / independent colleges)`);
console.log(`Clean records: ${allRecords.length}`);

// 按学校统计
const uniMap = {};
allRecords.forEach(r => {
  if (!uniMap[r.university]) uniMap[r.university] = { tier: r.tier, majors: new Set(), years: new Set(), records: [] };
  uniMap[r.university].majors.add(r.major);
  uniMap[r.university].years.add(r.year);
  uniMap[r.university].records.push(r);
});

// 指定必须保留的专业类别关键词映射
function isMandatoryMajor(major) {
  const m = major;
  // 双重保险：排除已过滤但可能通过其他路径进入的非普通批次专业
  if (isSpecialPlanMajor(m)) return false;
  // 1. 计算机/IT类
  if (m.includes('计算机') || m.includes('软件工程') || m.includes('人工智能') ||
      m.includes('数据科学') || m.includes('信息安全') || m.includes('网络工程'))
    return true;
  // 2. 电子/通信类
  if (m.includes('电子信息') || m.includes('通信工程') || m.includes('微电子') ||
      m.includes('集成电路') || m.includes('光电信息'))
    return true;
  // 3. 自动化/电气类
  if (m.includes('自动化') || m.includes('电气工程'))
    return true;
  // 4. 医学类
  if (m.includes('临床医学') || m.includes('口腔医学') || m.includes('药学'))
    return true;
  // 5. 金融/经济类
  if (m.includes('金融学') || m.includes('金融工程') || m.includes('经济学') ||
      m.includes('会计学') || m.includes('财政学') || m.includes('国际经济与贸易'))
    return true;
  // 6. 理学类
  if (m.includes('数学') || m.includes('物理学') || m.includes('化学') ||
      m.includes('生物') || m.includes('统计学'))
    return true;
  // 7. 工学类
  if (m.includes('机械工程') || m.includes('土木工程') || m.includes('建筑学') ||
      m.includes('材料科学') || m.includes('航空航天') || m.includes('能源与动力') ||
      m.includes('仪器') || m.includes('交通工程'))
    return true;
  // 8. 文法商类
  if (m.includes('法学') || m.includes('心理学') || m.includes('外国语言') ||
      m.includes('中国语言文学') || m.includes('新闻传播') || m.includes('工商管理') ||
      m.includes('公共管理'))
    return true;
  // 9. 其他类
  if (m.includes('食品科学') || m.includes('环境工程') || m.includes('生物医学') ||
      m.includes('信息管理') || m.includes('电子商务'))
    return true;
  return false;
}

// 统计
const unis = Object.keys(uniMap).sort();
const unis985 = unis.filter(u => uniMap[u].tier === '985');
const unis211 = unis.filter(u => uniMap[u].tier === '211');
console.log(`Universities: ${unis.length} (985: ${unis985.length}, 211: ${unis211.length})`);

// 选取代表性的专业（每个学校取若干关键专业）
// 策略：对每个学校，选取各年度都出现的高频专业，每个学校最多20个专业
// 优先选择出现年份多的，同时保证学科门类覆盖全面
const selectedRecords = [];

unis.forEach(uni => {
  const info = uniMap[uni];
  // 统计每个专业出现的年份次数
  const majorFreq = {};
  info.records.forEach(r => {
    if (!majorFreq[r.major]) majorFreq[r.major] = new Set();
    majorFreq[r.major].add(r.year);
  });

  // 按频率排序，取出现2年以上的专业，最多20个
  // 首先收集保底专业（指定类别关键词匹配的专业，无论出现年数）
  const mandatoryMajorSet = new Set(
    Object.entries(majorFreq)
      .filter(([major]) => isMandatoryMajor(major))
      .map(([major]) => major)
  );

  // 频率筛选的专业（出现2年以上）
  let freqMajors = Object.entries(majorFreq)
    .filter(([_, years]) => years.size >= 2)
    .sort((a, b) => b[1].size - a[1].size)
    .map(([major]) => major);

  // 如果没有出现2年以上的专业，取最频繁的
  if (freqMajors.length === 0) {
    freqMajors = Object.entries(majorFreq)
      .sort((a, b) => b[1].size - a[1].size)
      .slice(0, 10)
      .map(([major]) => major);
  }

  // 合并：保底专业优先，频率专业补充，去重，最多20个
  let selectedMajors = [];
  const seen = new Set();
  // 先加入保底专业
  mandatoryMajorSet.forEach(major => {
    if (!seen.has(major)) {
      selectedMajors.push(major);
      seen.add(major);
    }
  });
  // 再用频率专业补充到最多20个
  for (const major of freqMajors) {
    if (selectedMajors.length >= 20) break;
    if (!seen.has(major)) {
      selectedMajors.push(major);
      seen.add(major);
    }
  }

  // 提取这些专业的记录
  info.records.forEach(r => {
    if (selectedMajors.includes(r.major)) {
      selectedRecords.push(r);
    }
  });
});

console.log(`\nSelected records for frontend: ${selectedRecords.length}`);

// 按学校统计筛选后
const selectedUniMap = {};
selectedRecords.forEach(r => {
  if (!selectedUniMap[r.university]) selectedUniMap[r.university] = new Set();
  selectedUniMap[r.university].add(r.major);
});
console.log(`Universities with selected data: ${Object.keys(selectedUniMap).length}`);
Object.keys(selectedUniMap).sort().forEach(u => {
  console.log(`  ${u}: ${selectedUniMap[u].size} majors`);
});

// 生成TypeScript数据文件
// 分组：按学校→专业→年份排序
selectedRecords.sort((a, b) => {
  if (a.university !== b.university) return a.university.localeCompare(b.university);
  if (a.major !== b.major) return a.major.localeCompare(b.major);
  return a.year - b.year;
});

// 写入数据文件

function getCategory(major) {
  const m = major.toLowerCase();
  if (m.includes('计算机') || m.includes('软件') || m.includes('信息') || m.includes('电子') ||
      m.includes('通信') || m.includes('自动化') || m.includes('电气') || m.includes('机械') ||
      m.includes('土木') || m.includes('建筑') || m.includes('材料') || m.includes('化工') ||
      m.includes('环境') || m.includes('生物医学') || m.includes('航空航天') || m.includes('兵器') ||
      m.includes('交通') || m.includes('船舶') || m.includes('水利') || m.includes('测绘') ||
      m.includes('纺织') || m.includes('食品') || m.includes('矿业') || m.includes('冶金') ||
      m.includes('能源') || m.includes('动力') || m.includes('工程') || m.includes('仪器') ||
      m.includes('工业') || m.includes('海洋工程') || m.includes('核') || m.includes('城乡') ||
      m.includes('力学') || m.includes('安全') || m.includes('网络空间') || m.includes('人工智能') ||
      m.includes('数据') || m.includes('机器人') || m.includes('智能制造') || m.includes('工科'))
    return '工学';
  if (m.includes('数学') || m.includes('物理') || m.includes('化学') || m.includes('生物') ||
      m.includes('天文') || m.includes('地理') || m.includes('地质') || m.includes('大气') ||
      m.includes('海洋') || m.includes('理科') || m.includes('统计') || m.includes('科学'))
    return '理学';
  if (m.includes('临床') || m.includes('口腔') || m.includes('医学') || m.includes('药学') ||
      m.includes('护理') || m.includes('预防') || m.includes('基础医学') || m.includes('公共卫生') ||
      m.includes('中医') || m.includes('针灸'))
    return '医学';
  if (m.includes('经济') || m.includes('金融') || m.includes('贸易') || m.includes('保险') ||
      m.includes('财政') || m.includes('税务') || m.includes('国际商务'))
    return '经济学';
  if (m.includes('法学') || m.includes('政治') || m.includes('社会学') || m.includes('公安') ||
      m.includes('马克思') || m.includes('思想'))
    return '法学';
  if (m.includes('管理') || m.includes('会计') || m.includes('工商') || m.includes('公共') ||
      m.includes('物流') || m.includes('图书') || m.includes('旅游') || m.includes('电子商务'))
    return '管理学';
  if (m.includes('中文') || m.includes('外语') || m.includes('英语') || m.includes('新闻') ||
      m.includes('传播') || m.includes('历史') || m.includes('哲学') || m.includes('文学') ||
      m.includes('语言') || m.includes('日语') || m.includes('法语') || m.includes('德语') ||
      m.includes('翻译') || m.includes('汉语') || m.includes('广告') || m.includes('播音'))
    return '文学';
  if (m.includes('农学') || m.includes('植物') || m.includes('动物') || m.includes('园艺') ||
      m.includes('林学') || m.includes('草学') || m.includes('水产') || m.includes('畜牧'))
    return '农学';
  if (m.includes('教育') || m.includes('体育') || m.includes('心理'))
    return '教育学';
  if (m.includes('艺术') || m.includes('设计') || m.includes('音乐') || m.includes('美术') ||
      m.includes('戏剧') || m.includes('舞蹈') || m.includes('动画'))
    return '艺术学';
  return '其他';
}

// 写入数据文件
const dataDir = path.join(__dirname, 'src', 'data');

// 生成完整数据
const allLines = selectedRecords.map(r => {
  return `  { year: ${r.year}, university: '${r.university}', major: '${r.major.replace(/'/g, "\\'")}', category: '${getCategory(r.major)}', tier: '${r.tier}', minScore: ${r.minScore}, minRank: ${r.minRank}, source: '${r.source}' }`;
});

// 分割为多个文件避免单文件过大
const chunkSize = Math.ceil(allLines.length / 3);
for (let i = 0; i < 3; i++) {
  const chunk = allLines.slice(i * chunkSize, (i + 1) * chunkSize);
  const content = `// 河北省教育考试院官方投档数据 (Part ${i+1})\n// 来源: http://www.hebeea.edu.cn/\n\nexport const officialDataPart${i+1} = [\n${chunk.join(',\n')}\n];\n`;
  fs.writeFileSync(path.join(dataDir, `officialData${i+1}.ts`), content, 'utf-8');
  console.log(`Written officialData${i+1}.ts: ${chunk.length} records`);
}

// 生成汇总文件
const summary = {
  totalRecords: selectedRecords.length,
  totalUniversities: Object.keys(selectedUniMap).length,
  universities985: unis985.length,
  universities211: unis211.length,
  years: [2021, 2022, 2023, 2024, 2025, 2026],
  sources: [
    { year: 2021, url: 'http://www.hebeea.edu.cn/c/2021-07-24/488945.html' },
    { year: 2022, url: 'http://www.hebeea.edu.cn/c/2022-07-25/488817.html' },
    { year: 2023, url: 'https://www.hebeea.edu.cn/c/2023-07-25/489286.html' },
    { year: 2024, url: 'https://www.hebeea.edu.cn/c/2024-07-22/489446.html' },
    { year: 2025, url: 'https://www.hebeea.edu.cn/c/2025-07-23/489213.html' },
  ],
};
fs.writeFileSync(path.join(dataDir, 'officialSummary.json'), JSON.stringify(summary, null, 2), 'utf-8');
console.log('\nSummary:', JSON.stringify(summary, null, 2));
