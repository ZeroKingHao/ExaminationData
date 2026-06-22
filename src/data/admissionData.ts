// 河北省985/211高校录取数据（2021-2026年 物理类）
// 数据来源：河北省教育考试院、掌上高考(gaokao.cn)、中国教育在线(eol.cn)、高考100(gk100.com)
// 说明：部分数据为基于公开信息整理，具体以官方发布为准

export interface UniversityData {
  year: number;
  university: string;
  major: string;
  category: string; // 学科门类
  tier: '985' | '211';
  minScore: number;
  minRank: number;
  avgScore?: number;
  avgRank?: number;
  maxScore?: number;
  maxRank?: number;
  enrollment?: number; // 招生计划人数
  source: string;
}

import { officialDataPart1 } from './officialData1';
import { officialDataPart2 } from './officialData2';
import { officialDataPart3 } from './officialData3';

// 官方数据：来自河北省教育考试院投档情况统计Excel
// http://www.hebeea.edu.cn/c/2021-07-24/488945.html (2021)
// http://www.hebeea.edu.cn/c/2022-07-25/488817.html (2022)
// https://www.hebeea.edu.cn/c/2023-07-25/489286.html (2023)
// https://www.hebeea.edu.cn/c/2024-07-22/489446.html (2024)
// https://www.hebeea.edu.cn/c/2025-07-23/489213.html (2025)
const officialData = [...officialDataPart1, ...officialDataPart2, ...officialDataPart3];

export const DATA_SOURCES = [
  { name: '河北省教育考试院', url: 'http://www.hebeea.edu.cn/', description: '河北省高考官方数据发布平台（投档情况统计Excel）' },
  { name: '2021年投档线', url: 'http://www.hebeea.edu.cn/c/2021-07-24/488945.html', description: '河北省教育考试院2021年本科批平行志愿投档情况统计' },
  { name: '2022年投档线', url: 'http://www.hebeea.edu.cn/c/2022-07-25/488817.html', description: '河北省教育考试院2022年本科批平行志愿投档情况统计' },
  { name: '2023年投档线', url: 'https://www.hebeea.edu.cn/c/2023-07-25/489286.html', description: '河北省教育考试院2023年本科批平行志愿投档情况统计' },
  { name: '2024年投档线', url: 'https://www.hebeea.edu.cn/c/2024-07-22/489446.html', description: '河北省教育考试院2024年本科批平行志愿投档情况统计' },
  { name: '2025年投档线', url: 'https://www.hebeea.edu.cn/c/2025-07-23/489213.html', description: '河北省教育考试院2025年本科批平行志愿投档情况统计' },
];

// 合并官方数据：将官方数据转为UniversityData格式
const officialConverted: UniversityData[] = officialData.map(d => ({
  year: d.year,
  university: d.university,
  major: d.major,
  category: d.category,
  tier: d.tier as '985' | '211',
  minScore: d.minScore,
  minRank: d.minRank,
  source: 'hebeea.edu.cn',
}));

// 使用官方数据作为主数据源
export const admissionData: UniversityData[] = officialConverted;

// 一分一段表数据和查询函数迁移至 scoreRankData.ts，通过 lazy import 按需加载
// 使用方请直接从 '../data/scoreRankData' 导入，或通过 DataSourceList 组件间接访问
export type { ScoreRankEntry } from './scoreRankData';

// scoreRankTable 已移除（无组件引用），如需数据请直接使用 detailedScoreRankTable

// 注意：admissionData 已在上方由官方数据合并生成

// 辅助函数

// 辅助函数
export function getUniversities(): string[] {
  return [...new Set(admissionData.map(d => d.university))].sort();
}

export function getCategories(): string[] {
  return [...new Set(admissionData.map(d => d.category))].sort();
}

export function getMajorsByUniversity(university: string): string[] {
  return [...new Set(admissionData.filter(d => d.university === university).map(d => d.major))].sort();
}

export function getDataByUniversity(university: string): UniversityData[] {
  return admissionData.filter(d => d.university === university);
}

export function getDataByYear(year: number): UniversityData[] {
  return admissionData.filter(d => d.year === year);
}

export function getYears(): number[] {
  return [2021, 2022, 2023, 2024, 2025, 2026];
}

// 判断某年份是否有录取数据（分数/位次）。2026 等未发布年份返回 false。
export function hasAdmissionData(year: number): boolean {
  return admissionData.some(d => d.year === year);
}
