## Why

「一分一段表完整数据」区当前只能以表格逐行查看分数-位次对照。每年数据量达数百条,用户难以直观把握「哪个分数段竞争最激烈、本科线附近人群有多密集、高分段位次如何骤降」。折线图能在一张图上同时呈现累计位次走势与各分数段人数密度,帮助用户快速理解全省分数分布形态,补齐该区域只有表格、缺乏可视化概览的短板。

## What Changes

- 在 `DataSourceList` 的「一分一段表完整数据」区,展开年份后新增【表格 / 折线图】视图切换,**默认显示折线图**。
- 折线图为 Recharts 双轴 `LineChart`:X 轴=分数(升序,左低右高);左 Y 轴=累计位次(单调递减曲线,tick 用「万」格式化);右 Y 轴=该分数人数(钟形曲线,整数刻度);叠加本科线垂直参考线(`ReferenceLine`,若该年存在本科线)。
- 新增组件 `src/components/ScoreRankChart.tsx`(props: `data`、`year`、`bachelorScore?`),内部按 `score` 升序排序,复用现有 `ChartTooltip`。
- `DataSourceList` 新增 `dataView: 'table' | 'chart'` 状态;切换按钮复用现有 `queryMode` 同款样式;**切换年份时保留** `dataView` 选择。
- 无一分一段表数据的年份(如 2026)在两种视图下统一显示现有「待发布」提示。
- 复用 `hsl(var(--chart-x))` 色板、card 容器、明暗主题;`ResponsiveContainer` 固定高度并随 `useIsMobile` 适配。

## Capabilities

### New Capabilities

- `score-rank-chart-view`:「一分一段表完整数据」区提供折线图视图——双轴(累计位次 + 该分数人数)呈现单年份完整分布、叠加本科线参考线、支持表格/折线图切换且默认折线图、无数据年份统一提示。

### Modified Capabilities

无。本次仅新增可视化视图,不改变任何既有 spec 级别需求;「一分一段表交互查询」区(score/rank/browse 三模式)不在范围内。

## Impact

- 新增 `src/components/ScoreRankChart.tsx`。
- 修改 `src/components/DataSourceList.tsx`:「一分一段表完整数据」区(约 501–558 行)新增 `dataView` 状态、视图切换按钮、按视图条件渲染表格或 `<ScoreRankChart>`。
- 无数据结构变更(`ScoreRankEntry` 接口不动)、无新增依赖(Recharts / lucide-react 均已在用)、无后端/接口影响。
- 与当前 `feat/enrollment-plan-trend-sparkline` 分支无关,属独立新功能。
