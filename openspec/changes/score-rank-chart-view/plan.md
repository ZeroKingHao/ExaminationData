# 一分一段表完整数据 折线图视图 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在「一分一段表完整数据」区新增双轴折线图视图(累计位次 + 该分数人数 + 本科线参考线),支持表格/折线图切换、默认折线图。

**Architecture:** 新增独立组件 `ScoreRankChart.tsx`(Recharts 双 Y 轴 `LineChart`,内部按 `score` 升序排序,复用 `ChartTooltip`);`DataSourceList` 的「一分一段表完整数据」区新增 `dataView` 状态与切换按钮,按视图条件渲染表格或 `<ScoreRankChart>`。

**Tech Stack:** React 18 + TypeScript(strict)+ Recharts + Tailwind(shadcn 风格 `--chart-x` 色板)+ lucide-react。无测试框架,验证用 `npm run build` + `npm run dev` 手动。

**Spec 对照:** `openspec/changes/score-rank-chart-view/specs/score-rank-chart-view/spec.md`(7 条需求),设计见同目录 `design.md`,任务见 `tasks.md`。

---

## Task 1: 新建 ScoreRankChart 双轴折线图组件

**Files:**
- Create: `src/components/ScoreRankChart.tsx`

- [ ] **Step 1: 创建组件文件,写入完整实现**

创建 `src/components/ScoreRankChart.tsx`,内容如下(复用 `ChartTooltip`、`useIsMobile`、`--chart-x` 色板;`data` 升序排序使 X 轴左低右高、位次单调递减;`bachelorScore` 存在时画垂直参考线):

```tsx
import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { ChartTooltip } from './ChartTooltip';
import { useIsMobile } from '../hooks/useIsMobile';
import type { ScoreRankEntry } from '../data/scoreRankData';

interface ScoreRankChartProps {
  data: ScoreRankEntry[];
  year: number;
  bachelorScore?: number;
}

const RANK_NAME = '累计位次';
const COUNT_NAME = '该分数人数';

export default function ScoreRankChart({ data, year, bachelorScore }: ScoreRankChartProps) {
  const isMobile = useIsMobile();

  // 原始数据为降序(750→低分),按分数升序排序,使 X 轴左低右高、累计位次单调递减
  const sortedData = useMemo(
    () => [...data].sort((a, b) => a.score - b.score),
    [data],
  );

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  if (sortedData.length === 0) {
    return (
      <div className="p-6 rounded-xl bg-secondary/30 border border-dashed border-border/60 text-center text-sm text-muted-foreground">
        {year}年一分一段表暂无数据
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    [RANK_NAME]: 'hsl(var(--chart-1))',
    [COUNT_NAME]: 'hsl(var(--chart-2))',
  };

  // tooltip 数值格式化:位次用「万」、人数用千分位
  const valueFormatter = (value: number, name: string): [string, string] => {
    if (name === RANK_NAME) return [formatRank(value), RANK_NAME];
    return [value.toLocaleString(), COUNT_NAME];
  };

  return (
    <div className="bg-card rounded-xl border border-border/60 p-4 shadow-card card-shine">
      <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
        <LineChart data={sortedData} margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="score"
            type="number"
            domain={['dataMin', 'dataMax']}
            tickFormatter={v => `${v}`}
            interval="preserveStartEnd"
            minTickGap={30}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            label={{ value: '分数', position: 'insideBottom', offset: -2, fontSize: 12 }}
          />
          <YAxis
            yAxisId="rank"
            orientation="left"
            tickFormatter={formatRank}
            stroke="hsl(var(--chart-1))"
            fontSize={12}
            width={52}
          />
          <YAxis
            yAxisId="count"
            orientation="right"
            allowDecimals={false}
            tickFormatter={v => Math.round(v).toLocaleString()}
            stroke="hsl(var(--chart-2))"
            fontSize={12}
            width={44}
          />
          <Tooltip
            content={
              <ChartTooltip
                labelFormatter={l => `${l}分`}
                valueFormatter={valueFormatter}
                colorMap={colorMap}
              />
            }
          />
          <Legend />
          {bachelorScore !== undefined && (
            <ReferenceLine
              x={bachelorScore}
              stroke="hsl(var(--primary))"
              strokeDasharray="4 4"
              label={{ value: '本科线', position: 'top', fill: 'hsl(var(--primary))', fontSize: 11 }}
            />
          )}
          <Line
            yAxisId="rank"
            type="monotone"
            dataKey="rank"
            name={RANK_NAME}
            stroke="hsl(var(--chart-1))"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
          />
          <Line
            yAxisId="count"
            type="monotone"
            dataKey="count"
            name={COUNT_NAME}
            stroke="hsl(var(--chart-2))"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
```

- [ ] **Step 2: 类型检查**

Run: `npm run build`
Expected: 无 TypeScript 报错,`vite build` 成功产出 dist。

- [ ] **Step 3: 提交**

```bash
git add src/components/ScoreRankChart.tsx
git commit -m "feat: 新增 ScoreRankChart 双轴折线图组件

- Recharts 双 Y 轴:左轴累计位次(万格式)、右轴该分数人数
- 数据按 score 升序排序,X 轴左低右高、位次单调递减
- 复用 ChartTooltip、--chart-x 色板、useIsMobile;本科线垂直参考线"
```

---

## Task 2: DataSourceList 完整数据区接入视图切换

**Files:**
- Modify: `src/components/DataSourceList.tsx`(import 区、state 区、标题行 ~503-506、表格区 ~527-557)

- [ ] **Step 1: 新增 import**

在 `src/components/DataSourceList.tsx` 现有 import 区(第 5 行 `useIsMobile` import 之后)新增一行:

```tsx
import ScoreRankChart from './ScoreRankChart';
```

- [ ] **Step 2: 新增 dataView 状态**

在组件内现有 state 声明区(`const [expandedMatched, setExpandedMatched] = useState<number | null>(null);` 这一行之后)新增:

```tsx
  // 一分一段表完整数据区的视图模式:默认折线图
  const [dataView, setDataView] = useState<'table' | 'chart'>('chart');
```

(`useState` 已在第 4 行 import,无需补充。)

- [ ] **Step 3: 标题行增加视图切换按钮**

将「一分一段表完整数据」标题行(原代码):

```tsx
        <div className="flex items-center gap-2 mb-2">
          <Table2 className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">一分一段表完整数据</h2>
        </div>
```

替换为(左侧标题、右侧切换按钮;按钮样式复用 `queryMode` 同款;仅在有数据年份显示切换):

```tsx
        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
          <div className="flex items-center gap-2">
            <Table2 className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">一分一段表完整数据</h2>
          </div>
          {expandedYear && hasScoreRank(expandedYear) && (
            <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1">
              {([
                { id: 'chart' as const, label: '折线图' },
                { id: 'table' as const, label: '表格' },
              ]).map(v => (
                <button
                  key={v.id}
                  onClick={() => setDataView(v.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                    dataView === v.id
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          )}
        </div>
```

- [ ] **Step 4: 表格区按 dataView 条件渲染**

将完整数据区的表格渲染块(原代码,以 `{expandedYear && detailedScoreRankTable[expandedYear] && (` 开头、到对应 `)}` 结束的整块表格)外层包一层视图判断:在 `(` 之后、原 `<div className="bg-card rounded-xl border border-border/60 overflow-hidden...">` 之前插入 `dataView === 'table' ? (` 分支,并在该 `<div>...</div>` 之后、闭合 `)}` 之前追加 `) : ( <ScoreRankChart .../> )` 分支。

即整体结构变为:

```tsx
        {expandedYear && detailedScoreRankTable[expandedYear] && (
          dataView === 'table' ? (
            <div className="bg-card rounded-xl border border-border/60 overflow-hidden animate-fade-in shadow-card card-shine">
              {/* ...原表格 <table>...</table> 保持不变... */}
            </div>
          ) : (
            <div className="animate-fade-in">
              <ScoreRankChart
                data={detailedScoreRankTable[expandedYear]}
                year={expandedYear}
                bachelorScore={getBachelorLine(expandedYear)?.score}
              />
            </div>
          )
        )}
```

要点:原表格 `<div className="bg-card rounded-xl border border-border/60 overflow-hidden animate-fade-in shadow-card card-shine">` 及其内部的 `<table>` 完全保留,仅在其外层包 `dataView === 'table' ? ( ... )`,并新增 `else` 分支渲染 `<ScoreRankChart>`。`getBachelorLine`、`hasScoreRank`、`detailedScoreRankTable` 均已在文件顶部 import,无需补充。

- [ ] **Step 5: 类型检查**

Run: `npm run build`
Expected: 无 TypeScript 报错,构建成功。

- [ ] **Step 6: 提交**

```bash
git add src/components/DataSourceList.tsx
git commit -m "feat: 一分一段表完整数据区新增折线图视图切换

- 新增 dataView 状态(默认 chart)与表格/折线图切换按钮
- 折线图视图渲染 ScoreRankChart,传本科线分数
- 切换年份保留视图选择;无数据年份仍显示待发布提示"
```

---

## Task 3: 验证

**Files:** 无(仅运行验证)

- [ ] **Step 1: 生产构建**

Run: `npm run build`
Expected: `tsc -b` 无报错,`vite build` 成功产出 dist,无类型错误。

- [ ] **Step 2: 开发服务器手动验证**

Run: `npm run dev`,打开「数据来源」页 → 滚动到「一分一段表完整数据」区,逐项核对:

- 展开 2025(有数据)→ **默认显示折线图**(双轴:左累计位次单调递减、右该分数人数钟形)
- 位次轴刻度为「万」格式;X 轴分数左低右高
- tooltip 悬停显示「{分数}分」+ 累计位次 + 该分数人数
- 本科线分数处出现垂直虚线参考线 +「本科线」标注
- 点「表格」→ 切回表格视图(三列:分数/该分数人数/累计位次,本科线行高亮)
- 在折线图视图下点 2024 → 仍为折线图(视图选择保留)
- 点 2026(无数据)→ 显示「2026年一分一段表待发布」,不渲染表格与折线图,切换按钮隐藏
- 缩窄窗口至移动端尺寸 → 折线图高度自适应、布局不溢出

- [ ] **Step 3: 收尾提交(如有未提交改动)**

若 Task 1/2 已分别提交且无额外改动,跳过。否则:

```bash
git add -A
git commit -m "chore: 一分一段表折线图视图验证收尾"
```

---

## Spec 覆盖对照

| Spec 需求 | 实现位置 |
|---|---|
| 完整数据区提供折线图视图并默认显示 | Task 2 Step 2(默认 chart)+ Step 3(切换按钮) |
| 双轴累计位次 + 该分数人数 | Task 1 Step 1(双 `YAxis` + 双 `Line`) |
| X 轴按分数升序、位次单调递减 | Task 1 Step 1(`sort` + `type="number"`) |
| 本科线参考线 | Task 1 Step 1(`ReferenceLine`)+ Task 2 Step 4(传 `bachelorScore`) |
| 切换年份保留视图选择 | Task 2 Step 2(`dataView` 独立状态,`setExpandedYear` 不重置) |
| 无数据年份统一提示 | Task 2 Step 4(`detailedScoreRankTable[year]` 为空时不渲染,现有 561 行提示复用) |
| 复用 ChartTooltip/色板/主题/useIsMobile | Task 1 Step 1 |
