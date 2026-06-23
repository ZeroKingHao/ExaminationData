## Context

- 项目为静态 SPA，招生计划数据内嵌于 `src/data/enrollmentPlan.ts`；`EnrollmentPlanChart` 表格按「专业行 × 年份列」展示彩色单元格，`getCell(major, year)` 返回 `{ num, items }`，`num` 为同年同名专业条目人数合计。
- `HeatmapChart` 表格每行早已具备「5 年趋势」列，由其**内部局部函数** `MiniSparkline`（纯 SVG `<polyline>`）渲染，hover 通过 SVG `<title>` 显示「年份: 数值」。
- 现状瑕疵：`HeatmapChart` 传给 `MiniSparkline` 的 `years` 是完整的 `getYears()` 数组，而 `data`（`validRanks`）是过滤掉缺失年后的数组，二者长度可能不等 → 当中间年份缺失时，hover tooltip 的年份与数值**错位**。
- 展示年份统一由 `getYears()` 提供（`year-data-availability` capability），当前为 2021–2026。

## Goals / Non-Goals

**Goals:**
- 招生计划表格视图（桌面 + 移动端）每个专业行最右增加「趋势」列，忠实复刻热力图的纯折线视觉。
- `MiniSparkline` 成为单一公共组件，消除 `HeatmapChart` / `EnrollmentPlanChart` 间的重复定义。
- 修正热力图 tooltip 年份-数值错位瑕疵。

**Non-Goals:**
- 不引入涨跌着色、汇总数值、预测线等额外视觉语义（保持纯折线）。
- 不修改移动端卡片视图。
- 不改动数据结构 / 数据源 / 任何接口。
- 不改动热力图折线的视觉风格（仅修正 tooltip 数据对齐，不改外观与尺寸）。

## Decisions

1. **提取公共组件而非内联复制**
   新建 `src/components/MiniSparkline.tsx`，`HeatmapChart` 删除内部定义改为 `import`。
   - 理由：DRY、单一维护点；两处折线逻辑完全一致。
   - 备选（在 `EnrollmentPlanChart` 内联复制一份）：隔离性好、零风险触碰热力图，但代码重复、未来易漂移。舍弃。

2. **组件签名保持不变**
   `MiniSparkline({ data: number[]; years?: number[]; width?; height? })`，保留 `data.length < 2 → 显示「-」` 既有逻辑，使热力图调用处零行为变化（除 tooltip 对齐修正外）。

3. **招生计划数据口径**
   折线 `data` = 该专业各年 `getCell(major, y)?.num` 过滤 `null` 后的数组；`years` = 与之同步过滤得到的「有效年份」。与表格单元格同口径（同年同名合计）。

4. **tooltip 年份对齐修正**
   由调用方负责传入「与有效数据点一一对应」的 `years`。
   - `HeatmapChart`：在原 `validRanks` 旁补算 `validYears`（与 `validRanks` 同步过滤同索引年份），传入 `<MiniSparkline data={validRanks} years={validYears} />`。
   - `EnrollmentPlanChart`：构建 `(num, year)` 配对再拆分，保证 `data[i]` 对应 `years[i]`。

5. **列标题用「趋势」**
   不写死「5 年 / 6 年」，避免 `getYears()` 扩展后失真；置于各年份列之后、表格最右，`min-w-[80px]`、居中，列宽与热力图「趋势」列一致。

6. **移动端表格视图同步加列**
   在移动端 table 分支的 `thead` / `tbody` 同步追加趋势列与单元格；不改动「切换卡片/表格视图」交互与文案。

## Risks / Trade-offs

- **[HeatmapChart 行为变化]** tooltip 内容从「可能错位的年份」变为「正确对齐的年份」 → 属缺陷修复，正向；apply 后 review 须重点验证两处表格（桌面/移动端）的 tooltip。
- **[表格变宽]** 新增一列使表格更宽 → 已有 `overflow-x-auto scrollbar-thin` 横向滚动（移动端亦支持），影响可控。
- **[缺失年不画断点]** 数据过滤后为连续折线，缺失年不显示断点 / 留空 → 与热力图现有行为一致，本变更不引入断点语义。
