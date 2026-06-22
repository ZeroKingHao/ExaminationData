## Context

应用是河北省 985/211 录取数据静态 SPA，展示 2021–2025 物理类数据。年份范围目前以硬编码数组形式散落在 10+ 处：`admissionData.ts:getYears()` 一处，各组件（`TrendChart`、`CompareView`、`HeatmapChart`、`RecommendView`、`EnrollmentPlanChart`、`DataSourceList`）各自的本地 `YEARS` / `YEAR_OPTIONS` 数组多处。

数据现状：
- `enrollmentPlan.ts`（招生计划）已含全部 120 所高校的 `"2026"` 键 —— **2026 有真实数据**。
- `officialData*.ts`（录取分数/位次）无 2026 记录 —— 2026 高考刚结束，录取预计 7 月进行。
- `scoreRankData.ts`（一分一段表）无 2026 —— 预计 6 月底发布。
- `scoreRankData` 现有查询函数 `getRankByScore` / `getScoreByRank` / `getBachelorLine` 对不存在年份已安全返回 `null`（`if (!table) return null`）。

## Goals / Non-Goals

**Goals:**
- 让 2026 出现在所有年份入口（选择器、年轴、表格、文案）。
- 招生计划视图显示真实 2026 数据。
- 其余视图对 2026 以统一占位承接，数据发布后零 UI 改动即可生效。
- 消除年份硬编码重复，未来加新年只改一处。

**Non-Goals:**
- 不补充 2026 录取数据 / 一分一段表的真实数据（等官方发布后另行处理）。
- 不改 `scoreRankData` 查询函数本身（已兼容）。
- 不重构 `DataTable`（跨年总览，无需按年占位）。
- 不引入测试框架（项目无测试，用构建 + 手动验证替代）。

## Decisions

### D1: 集中化年份管理（替代"就地扩展"）
年份逻辑收口到 `admissionData.ts` + `scoreRankData.ts`：
- `getYears()` → `[2021, 2022, 2023, 2024, 2025, 2026]`
- 新增 `hasAdmissionData(year)`：`admissionData.some(d => d.year === year)`
- 新增 `getScoreRankYears()`：`Object.keys(detailedScoreRankTable).map(Number).sort()`
- 新增 `hasScoreRank(year)`：`detailedScoreRankTable[year] !== undefined`

各组件删除本地 `YEARS`，改 `import { getYears }`。
**理由**：避免 10+ 处重复，未来加 2027 只改 `getYears()` 一处。替代方案"就地扩展"改动小但留下技术债。**权衡**：改动面大，需逐个组件验证。

### D2: 占位提示策略（替代"仅招生计划加"或"预测填充"）
- 录取类视图 2026 显示「2026 年录取数据待发布（预计 7 月公布）」。
- 一分一段表视图显示「2026 年一分一段表待发布」。
- 图表年轴：2026 列空白 / 虚线占位；整页类视图（推荐、热度排名）用现有空状态卡片。
- 招生计划：直接显示真实 2026。
**理由**：符合"所有年份入口都加 2026"的字面需求，且为未来数据预留。替代方案"仅招生计划加"不符合需求；"预测填充"会误导用户把预测当真实数据。

### D3: 默认年份 2025 → 2026
`AppContext.selectedYear` 默认改 2026；`TrendChart.yearEnd` 默认改 2026。
**理由**：用户明确要求突出最新年。**权衡**：首屏多数视图显示"待发布"，仅招生计划有真实数据 —— 已在 D2 用清晰占位承接，可接受。

### D4: TrendChart 预测与 2026 年轴统一
现有 `predictNextYear(points, 2026)` 把 2026 作为预测点追加到 chartData 之后。年轴正式含 2026 后：
- 年轴含 2026，默认该行无录取数据 → 占位空白。
- 开启"预测"开关时，2026 行填入预测值并标注虚线样式，不再单独追加重复的 2026 点。
- 预测算法内部仍基于 `[2021..2025]` 真实点（预测用 `allYears` 保持不变）。
**理由**：避免同一 x 轴位置出现两个 2026 点；预测与年轴统一，单一数据源。

### D5: DataTable 不做占位
`DataTable` 跨年显示该校全部记录，`year` prop 仅用于行高亮（`d.year === year ? 'table-row-highlight'`）。选 2026 只是少一行高亮，自然体现"无该年数据"。
**理由**：它的语义是总览而非单年视图，加占位反而破坏一致性。

## Risks / Trade-offs

- **[D1 改动面大，遗漏某处硬编码]** → 用 grep 兜底搜索 `2021, 2022` 确认无遗漏；构建 + 逐 Tab 手动验证。
- **[D3 默认 2026 导致首屏多视图空]** → 占位文案明确"预计 7 月"，且招生计划 / 趋势预测有内容，体验可接受。
- **[D4 预测与年轴合并逻辑复杂]** → 在 TrendChart 单点集中处理，保持 `chartData` 单一数据源。
- **[2026 招生计划部分学校可能缺失]** → `EnrollmentPlanChart` 已有 `hasData` 空状态处理，沿用。

## Migration Plan

纯前端、无数据迁移、无版本切换：
1. 改数据层函数（`getYears` + 判断函数）。
2. 改默认年份（`AppContext`、`TrendChart.yearEnd`）。
3. 逐组件接入（招生计划 → 趋势 → 对比 → 热力图 → 推荐 → 热度 → 一分一段表 → 文案）。
4. 改离线脚本 `generate_frontend_data.cjs`。
5. `npm run build` + `npm run dev` 逐 Tab 验证。

**回滚**：`git revert` 单次提交即可，无副作用。

## Open Questions

无（关键决策已在 brainstorming 阶段与用户确认）。
