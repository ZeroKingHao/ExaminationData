# Tasks

## 1. 新建 ScoreRankChart 双轴折线图组件

- [x] 1.1 新建 `src/components/ScoreRankChart.tsx`,定义 props `{ data: ScoreRankEntry[]; year: number; bachelorScore?: number }`;`import` Recharts(`LineChart`/`Line`/`XAxis`/`YAxis`/`ReferenceLine`/`Tooltip`/`Legend`/`ResponsiveContainer`/`CartesianGrid`)、`ChartTooltip`、`useIsMobile`、`ScoreRankEntry` 类型
- [x] 1.2 内部 `useMemo` 按 `score` 升序排序 `data`;复用 `formatRank`(≥10000 显示「万」);`data` 为空时返回占位提示不渲染图
- [x] 1.3 渲染 `ResponsiveContainer` + `LineChart`:左 `YAxis`(yAxisId="rank",`tickFormatter=formatRank`)、右 `YAxis`(yAxisId="count",整数刻度)、`XAxis`(dataKey="score",type="number",domain=['dataMin','dataMax'],设 `interval` 控制刻度密度)
- [x] 1.4 两条 `Line`:「累计位次」绑定左轴(`hsl(var(--chart-x))` primary 色)、「该分数人数」绑定右轴(次色);`bachelorScore` 存在时加 `<ReferenceLine x={bachelorScore} label="本科线" />`
- [x] 1.5 `Tooltip` 复用 `ChartTooltip`:`labelFormatter` → `${label}分`,`valueFormatter` 区分位次 / 人数,`colorMap` 映射两条线名;配 `Legend` 图例

## 2. DataSourceList 完整数据区接入视图切换

- [x] 2.1 `src/components/DataSourceList.tsx` 顶部 `import ScoreRankChart`;新增状态 `const [dataView, setDataView] = useState<'table' | 'chart'>('chart')`
- [x] 2.2 在「一分一段表完整数据」标题行旁渲染「表格 / 折线图」切换按钮,复用现有 `queryMode` 同款按钮样式(`bg-primary text-primary-foreground` 高亮当前视图)
- [x] 2.3 展开年份分支:`hasScoreRank(expandedYear)` 为假时,两种视图统一显示现有「{年份}年一分一段表待发布」提示(扩展现有 560–565 行逻辑至 chart 视图同样生效)
- [x] 2.4 有数据时按 `dataView` 条件渲染:`'table'` 渲染现有表格;`'chart'` 渲染 `<ScoreRankChart data={detailedScoreRankTable[expandedYear]} year={expandedYear} bachelorScore={getBachelorLine(expandedYear)?.score} />`

## 3. 验证

- [x] 3.1 `npm run build` 通过(`tsc -b && vite build`,strict 模式无报错)
- [x] 3.2 `npm run dev` 手动验证:展开年份默认显示折线图、双轴曲线与「万」刻度正确、本科线参考线出现、表格/折线图可切换、切换年份后视图选择保留、无数据年份(2026)显示待发布提示、移动端布局正常

## 4. 特控线参考线(增量需求)

- [x] 4.1 `src/data/scoreRankData.ts` 新增 `SPECIAL_LINES`(2021–2025)与 `getSpecialLine`
- [x] 4.2 `ScoreRankChart` 增 `specialScore` prop,渲染第二条参考线(`hsl(var(--chart-3))` 色、点虚线,与本科线区分)
- [x] 4.3 `DataSourceList` 传入 `getSpecialLine(expandedYear)?.score`
- [x] 4.4 验证:2025/2021 等年份同时显示本科线 + 特控线两条参考线
