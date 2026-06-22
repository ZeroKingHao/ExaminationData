# Implementation Tasks

## 1. 数据层：集中化年份管理

- [x] 1.1 `src/data/admissionData.ts`：`getYears()` 返回值追加 2026；新增导出 `hasAdmissionData(year: number): boolean`；文件头注释「2021-2025」→「2021-2026」
- [x] 1.2 `src/data/scoreRankData.ts`：新增导出 `getScoreRankYears(): number[]`（基于 `detailedScoreRankTable` 键派生）与 `hasScoreRank(year: number): boolean`

## 2. 默认年份

- [x] 2.1 `src/context/AppContext.tsx`：`selectedYear` 初始值由 `2025` 改为 `2026`
- [x] 2.2 `src/components/TrendChart.tsx`：`yearEnd` 初始值由 `2025` 改为 `2026`

## 3. 组件接入 — 有真实 2026 数据

- [x] 3.1 `src/components/EnrollmentPlanChart.tsx`：删除本地 `YEARS` 常量，改 `import { getYears }`；副标题与年份摘要文案「2021–2025」→「2021–2026」

## 4. 组件接入 — 录取类 / 一分一段表占位

- [x] 4.1 `src/components/TrendChart.tsx`：`ALL_YEARS` 改用 `getYears()`；年轴含 2026 时数据行空白占位；预测开关开启时 2026 填预测值并合并到年轴（消除重复 2026 点）；预测算法内部仍用 `[2021..2025]`
- [x] 4.2 `src/components/CompareView.tsx`：删除本地 `YEARS`，改用 `getYears()`；2026 列显示「待发布」占位
- [x] 4.3 `src/components/HeatmapChart.tsx`：本地 `years` 改用 `getYears()`；2026 列灰色「待发布」占位
- [x] 4.4 `src/components/RecommendView.tsx`：`YEAR_OPTIONS` 改用 `getYears()`；选 2026 时整页显示「2026 年录取数据待发布（预计 7 月公布）」
- [x] 4.5 `src/components/BarChart.tsx`：年份选 2026 且 `hasAdmissionData(2026)` 为 false 时显示「待发布」空状态
- [x] 4.6 `src/components/DataSourceList.tsx`：两处年份列表（约 L154、L505）加 2026；一分一段表选 2026 时用 `hasScoreRank` 判断显示「2026 年一分一段表待发布」

## 5. 文案与离线脚本

- [x] 5.1 `src/App.tsx`：顶栏副标「2021–2025」→「2021–2026」
- [x] 5.2 `generate_frontend_data.cjs`：`years: [2021, 2022, 2023, 2024, 2025]` 追加 2026

## 6. 验证

- [x] 6.1 `npm run build` 通过（TS strict 类型检查）
- [x] 6.2 `npm run dev` Playwright 运行时验证 5/5 通过：年份选择器含 2026、默认选中年份 2026、招生计划显示真实 2026 列、智能推荐 2026 显示待发布、切回 2025 后推荐输入区恢复
- [x] 6.3 grep 兜底：确认源码内无残留 `[2021, 2022, 2023, 2024, 2025]` 硬编码（`TrendChart.tsx` 预测算法内部的 `allYears` 为 spec D4 要求保留；脚本 `fetch_enrollment_plan.cjs` 除外）
