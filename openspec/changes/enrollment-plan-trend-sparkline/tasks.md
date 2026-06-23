# Tasks

## 1. 提取公共 MiniSparkline 组件

- [ ] 1.1 新建 `src/components/MiniSparkline.tsx`，将 `HeatmapChart` 内部的 `MiniSparkline` 原样迁出（签名 `data/years/width/height` 不变，`data.length < 2` 显示「-」）
- [ ] 1.2 `HeatmapChart.tsx` 删除局部 `MiniSparkline` 定义，改为 `import` 公共组件

## 2. 修正热力图 tooltip 年份对齐

- [ ] 2.1 桌面表格：补算与 `validRanks` 同索引对齐的 `validYears`，传入 `<MiniSparkline data={validRanks} years={validYears} />`
- [ ] 2.2 移动端表格：同样补算对齐的 `validYears` 并传入

## 3. 招生计划表格新增「趋势」列

- [ ] 3.1 `EnrollmentPlanChart.tsx` 顶部 `import MiniSparkline`
- [ ] 3.2 桌面表格 `thead` 在所有年份列之后增加「趋势」列表头（`min-w-[80px]`、居中）
- [ ] 3.3 桌面表格 `tbody` 每行末尾增加趋势单元格：由 `(num, year)` 配对拆分出 `data` / `validYears`，渲染 `<MiniSparkline />`，有效数据 < 2 时显示「-」
- [ ] 3.4 移动端表格视图 `thead` / `tbody` 同步增加趋势列与单元格（逻辑复用）

## 4. 验证

- [ ] 4.1 `npm run build` 通过（`tsc -b && vite build`）
- [ ] 4.2 浏览器验证：桌面与移动端表格趋势列正常渲染、hover 显示对齐的「年份: 人数」、移动端卡片视图无趋势列
