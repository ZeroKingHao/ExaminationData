## Why

招生计划视图（`EnrollmentPlanChart`）的表格目前仅以彩色单元格展示各专业历年的计划招生人数，用户难以一眼判断某专业的招生规模是逐年扩招、缩招还是波动。而热力图视图（`HeatmapChart`）早已具备「5 年趋势」迷你折线（`MiniSparkline`）来呈现走向，招生计划却缺少同等的趋势可视化能力。本次将趋势折线引入招生计划表格，让用户在查看计划人数的同时直接看到该专业的招生走向；顺带把 `MiniSparkline` 抽成公共组件，消除重复并修复其现存的 tooltip 年份错位瑕疵。

## What Changes

- 将 `HeatmapChart` 内部的局部函数 `MiniSparkline` 提取为公共组件 `src/components/MiniSparkline.tsx`，供 `HeatmapChart` 与 `EnrollmentPlanChart` 共同复用（签名不变）。
- 在 `EnrollmentPlanChart` 的**表格视图**（桌面表格 + 移动端表格视图）每个专业行的**最右侧**新增「趋势」列，渲染迷你折线；数据为该专业各年（2021–2026）计划招生人数（同年同名合计，与表格单元格口径一致）。
- **移动端卡片视图不增加趋势列**，与热力图行为保持一致。
- 折线为纯中性 SVG 折线，hover 显示「年份: 人数」；某专业有效数据点 < 2 个时显示占位「-」（沿用 `MiniSparkline` 原有逻辑）。
- 顺带修正 `HeatmapChart` 调用 `MiniSparkline` 时 `years` 传完整年份数组、而 `data` 为过滤缺失年后的数组导致的 tooltip 年份-数值错位：统一传入与有效数据严格对齐的 `years`。

## Capabilities

### New Capabilities

- `enrollment-plan-trend`: 招生计划表格视图为每个专业提供「历年计划招生人数趋势」迷你折线列——纯中性折线、hover 显示「年份: 人数」、有效数据不足时显示占位，仅作用于表格视图（桌面与移动端），卡片视图不含。

### Modified Capabilities

无。`MiniSparkline` 的提取与热力图 tooltip 错位修正属于代码组织与缺陷修复，不改变任何既有 spec 级别的需求。

## Impact

- 新增 `src/components/MiniSparkline.tsx`（公共组件）。
- 修改 `src/components/HeatmapChart.tsx`：删除内部 `MiniSparkline` 定义改为 import；修正两处（桌面表格、移动端表格）sparkline 调用，传入与有效数据对齐的 `years`。
- 修改 `src/components/EnrollmentPlanChart.tsx`：import `MiniSparkline`；桌面表格与移动端表格的 `thead` 增加「趋势」列表头（最右、`min-w-[80px]`、居中），`tbody` 每行末尾增加趋势单元格。
- 无数据结构变更（`UniversityData`/`EnrollmentPlan` 接口不动）、无新增依赖、无后端/接口影响。
