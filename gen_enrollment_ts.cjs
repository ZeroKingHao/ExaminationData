/**
 * 将 raw_data/enrollment_plan.json 转换为 src/data/enrollmentPlan.ts
 * 用法: node gen_enrollment_ts.cjs
 *
 * 字段映射（fetch 脚本输出的 JSON → 前端 MajorPlan 接口）:
 *   major   → name
 *   planNum → num
 *   length  → length
 *   xuanke  → xuanke
 *   (tuition/remark 丢弃，前端接口不需要)
 */
const fs = require('fs');
const path = require('path');

const inPath = path.join(__dirname, 'raw_data', 'enrollment_plan.json');
const outPath = path.join(__dirname, 'src', 'data', 'enrollmentPlan.ts');

const raw = JSON.parse(fs.readFileSync(inPath, 'utf-8'));

const data = {};
let uniCount = 0, yearCount = 0, majorCount = 0;
for (const [uni, years] of Object.entries(raw)) {
  if (!years || typeof years !== 'object') continue;
  const yOut = {};
  for (const [year, yp] of Object.entries(years)) {
    if (!yp || !Array.isArray(yp.majors)) continue;
    const majors = yp.majors
      .map(m => ({
        name: m.major || '',
        num: Number(m.planNum) || 0,
        length: m.length || '',
        xuanke: m.xuanke || '',
      }))
      .filter(m => m.name); // 丢弃无名称的脏数据
    if (majors.length === 0) continue;
    yOut[year] = { totalPlan: Number(yp.totalPlan) || 0, majors };
    yearCount++;
    majorCount += majors.length;
  }
  if (Object.keys(yOut).length === 0) continue;
  data[uni] = yOut;
  uniCount++;
}

const banner = `/**
 * 河北省物理类各高校历年招生计划数据（2021-2026）
 * 数据来源：掌上高考 (gaokao.cn) · 仅普通类（已排除专项计划/中外合作办学等特殊类型）
 * 生成时间：2026-06-23
 * 生成脚本：gen_enrollment_ts.cjs（由 fetch_enrollment_plan.cjs 抓取的原始数据转换）
 *
 * 统计：${uniCount} 所高校 · ${yearCount} 个校年记录 · ${majorCount} 个专业条目
 */

export interface MajorPlan {
  name: string;
  num: number;
  length: string;
  xuanke: string;
}

export interface YearPlan {
  totalPlan: number;
  majors: MajorPlan[];
}

export interface EnrollmentPlan {
  [year: string]: YearPlan;
}

export interface EnrollmentPlanData {
  [university: string]: EnrollmentPlan;
}

export const enrollmentPlanData: EnrollmentPlanData = `;

const ts = banner + JSON.stringify(data, null, 2) + ';\n';

fs.writeFileSync(outPath, ts, 'utf-8');
console.log(`已生成 ${outPath}`);
console.log(`  ${uniCount} 所高校 · ${yearCount} 校年 · ${majorCount} 专业条目`);
console.log(`  文件大小: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
