## Why

2026 年招生计划数据已抓取就绪（`enrollmentPlan.ts` 已含全部 120 所高校的 `"2026"` 键），但应用所有年份相关入口（年份选择器、图表年轴、数据表、一分一段表）仍停留在 2021–2025，导致已就绪的 2026 招生计划无法展示；同时年份框架未为 2026 录取数据（预计 2026 年 7 月公布）预留接入点。现在需要把 2026 接入所有年份入口：招生计划直接显示真实数据，其余依赖录取分数/位次与一分一段表的视图以统一"待发布"占位承接，待官方数据发布后只需填充数据、无需再改 UI。

## What Changes

- 展示年份范围统一扩展为 **2021–2026**（`getYears()` 返回含 2026）。
- **BREAKING（内部契约）**：新增数据可用性判断函数 `hasAdmissionData(year)`、`hasScoreRank(year)`、`getScoreRankYears()`，作为"某年某数据集是否可用"的唯一判断来源。
- 全局默认选中年份 `selectedYear` 由 `2025` 改为 `2026`。
- 招生计划视图（`EnrollmentPlanChart`）显示真实 2026 招生计划数据。
- 依赖录取数据/一分一段表的视图（趋势图、高校对比、热力图、智能推荐、热度排名、一分一段表）在 2026 年显示统一"待发布"占位（文案与视觉规范化）。
- 移除散落在各组件本地的 `YEARS` 硬编码数组，统一引用集中化年份函数。
- 离线脚本 `generate_frontend_data.cjs` 的 `years` 数组同步加 2026，保持结构一致。

## Capabilities

### New Capabilities

- `year-data-availability`: 统一管理展示年份范围（2021–2026）与各数据集（录取分数/位次、一分一段表、招生计划）的可用年份判断，并定义"无数据年份"的占位展示契约（文案、视觉、各视图行为）。

### Modified Capabilities

（项目 `openspec/specs/` 当前为空，无既有 capability 需修改。）

## Impact

- **数据层**：`src/data/admissionData.ts`（`getYears`、新增判断函数）、`src/data/scoreRankData.ts`（新增 `getScoreRankYears`、`hasScoreRank`）。
- **状态层**：`src/context/AppContext.tsx`（默认年份）。
- **组件层**：`src/App.tsx`、`TrendChart`、`CompareView`、`HeatmapChart`、`RecommendView`、`BarChart`、`DataSourceList`、`EnrollmentPlanChart`、`FilterDrawer`。
- **离线脚本**：`generate_frontend_data.cjs`。
- **不受影响**：`enrollmentPlan.ts`（已含 2026）、`DataTable`（跨年总览不按年过滤）、`scoreRankData` 查询函数本身（已对不存在年份返回 `null`）。
- 无后端、无外部 API、无运行时破坏性变更；`hasAdmissionData`/`hasScoreRank` 等为纯新增导出，向后兼容。
