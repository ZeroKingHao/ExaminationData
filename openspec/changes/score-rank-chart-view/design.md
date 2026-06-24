## Context

- 项目为静态 SPA,一分一段表数据内嵌 `src/data/scoreRankData.ts`:`detailedScoreRankTable: Record<number, ScoreRankEntry[]>`,`ScoreRankEntry = { score; count; rank }`,**按分数降序排列**(750→低分),`rank`(累计位次)随分数降低而递增。辅以 `getBachelorLine(year)`、`hasScoreRank(year)`。
- `DataSourceList` 的「一分一段表完整数据」区(约 501–558 行)展开某年份后,以表格渲染该年份全部条目(分数 / 该分数人数 / 累计位次),本科线所在行高亮。
- 项目已有 Recharts 折线图先例:`TrendChart`(`LineChart` + 多子视图 + `ChartTooltip`);`ChartTooltip` 支持 `labelFormatter` / `valueFormatter` / `colorMap`;统一色板 `hsl(var(--chart-x))`;响应式 hook `useIsMobile`。

## Goals / Non-Goals

**Goals:**

- 「一分一段表完整数据」区新增折线图视图,以双轴同时呈现累计位次走势与各分数段人数密度,并叠加本科线参考线。
- 提供「表格 / 折线图」视图切换,默认折线图。
- 复用现有 `ChartTooltip`、色板、明暗主题,保持视觉与交互风格一致。

**Non-Goals:**

- 不做多年份对比(多线叠加),留作后续增强。
- 不做对数轴。
- 不修改「一分一段表交互查询」区(score / rank / browse 三模式)。
- 不改动 `ScoreRankEntry` 数据结构与数据源。

## Decisions

1. **新增独立组件 `ScoreRankChart` 而非内联**
   新建 `src/components/ScoreRankChart.tsx`,`DataSourceList` 引用。
   - 理由:`DataSourceList` 已 591 行偏大,折线图逻辑独立成组件利于隔离、复用与维护(文件聚焦原则)。
   - 备选(内联进 `DataSourceList`):少一个文件,但加剧主组件膨胀。舍弃。

2. **双 Y 轴映射**
   左 `YAxis`(yAxisId="rank")=累计位次(`tickFormatter` 用「万」);右 `YAxis`(yAxisId="count")=该分数人数。
   - 理由:位次(几十万)与人数(几十~几百)量级差异巨大,必须双轴,否则小量级曲线被压扁不可见。
   - 备选(单轴 + 对数刻度):普通用户难读对数轴;单轴线性下人数不可见。舍弃。

3. **X 轴升序 + 渲染前排序**
   原始数据降序;组件内 `useMemo` 按 `score` 升序排序后喂给 Recharts,`XAxis type="number" domain=['dataMin','dataMax']`,左低右高。
   - 理由:折线图 X 轴升序符合常规阅读习惯;累计位次曲线随之单调递减(左高位次→右低位次),直觉一致。
   - 备选(沿用降序 750→低 从左到右):与常规图表阅读方向相反。舍弃。

4. **位次轴用线性 + 格式化(非对数)**
   线性轴 + `tickFormatter`(万)。本科线附近(用户关注区)处中低位次,线性可读;高分段位次小、曲线在底部趋于平缓,可接受。
   - 备选(对数轴):高分段细节更好,但牺牲整体直观性、增加认知负担。舍弃(后续可作为增强项)。

5. **复用 `ChartTooltip`**
   `labelFormatter` → `${label}分`;`valueFormatter` 依 `entry.name` 区分位次(`formatRank`)/ 人数(`toLocaleString`);`colorMap` 映射两条线名 → 色板色。
   - 理由:统一 tooltip 组件,风格与其它图表一致。
   - 备选(Recharts 默认 tooltip):风格不统一。舍弃。

6. **本科线参考线**
   若 `getBachelorLine(year)` 存在,渲染 `<ReferenceLine x={score} label="本科线" />`。
   - 理由:本科线是关键分界,垂直参考线最直观。

7. **视图状态与默认值**
   `DataSourceList` 新增 `dataView: 'table' | 'chart'`,默认 `'chart'`;toggle 复用现有 `queryMode` 同款按钮样式;切换年份时**保留** `dataView`(不重置)。
   - 理由:用户明确要求默认折线图;保留视图选择提升连续浏览体验。

8. **无数据年份统一提示**
   `hasScoreRank(year)` 为假(如 2026)时,表格与折线图两视图统一显示现有「{年份}年一分一段表待发布」提示(扩展现有 560–565 行逻辑,使其在 chart 视图下同样生效)。

## Risks / Trade-offs

- **[数据点较多]** 每年数百个分数条目 → Recharts `LineChart` 可承载;`XAxis` 设 `interval` 控制刻度密度避免重叠;单年静态渲染,性能可接受。
- **[线性轴高分段平缓]** 高分位次区曲线贴近底部、细节偏弱 → 本次接受;后续可加局部缩放 / 对数切换作为增强。
- **[双轴读图门槛]** 双 Y 轴需用户对应左右轴 → 通过 tooltip 明确标注「累计位次 / 该分数人数」+ 图例降低误读。
- **[`DataSourceList` 膨胀]** 增加切换逻辑 → 抽出 `ScoreRankChart` 已缓解;剩余改动仅为状态字段 + 条件渲染,可控。
