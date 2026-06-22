# 设计文档：招生计划 Tab

- 日期：2026-06-22
- 状态：已批准（brainstorming 阶段）
- 作者：Claude（与用户协作）

## 1. 概述

在顶部导航新增独立的「招生计划」Tab，以热力图样式（专业为行、年份为列、单元格显示计划人数并按颜色深浅映射）展示当前选中学校每个专业每年的招生计划人数。视觉与现有 `HeatmapChart` 保持一致，但数据源切换为已就绪的招生计划数据。

## 2. 背景与约束

- **数据已就绪**：`src/data/enrollmentPlan.ts` 内嵌 99 所学校 2021–2025 每年的分专业计划数据（来源：掌上高考 gaokao.cn）。结构见第 4 节。
- **专业名不对齐**：招生计划专业名（掌上高考，如"理科试验班类"）与录取数据专业名（河北考试院）不一致，无法按专业名可靠对齐。因此本视图**独立展示招生计划数据自身的专业列表**，不尝试与录取数据匹配。
- **无学科门类**：招生计划数据无 `category` 字段，本 Tab 不参与全局 category 筛选。
- **部分缺失**：99 所并非覆盖全部 120 所录取校，且部分「学校×年份」抓取失败，需做空值处理。

## 3. 架构集成

### 3.1 类型

`src/context/AppContext.tsx:3` 的 `TabType` 联合类型新增 `'plan'`：

```ts
export type TabType = 'trend' | 'compare' | 'recommend' | 'heatmap' | 'bar' | 'plan' | 'table' | 'sources';
```

### 3.2 桌面端 Tab

`src/App.tsx` 的 `tabs` 数组（约 72 行）插入新项，位置在「热力图」之后、「数据表」之前：

```ts
{ id: 'plan' as TabType, label: '招生计划', icon: ClipboardList },
```

图标使用 `lucide-react` 的 `ClipboardList`（需在 `App.tsx` 顶部 import 中追加）。

并在渲染区（约 199–205 行之间，`heatmap` 分支后）新增分支：

```tsx
{activeTab === 'plan' && (
  <EnrollmentPlanChart university={selectedUniversity} />
)}
```

组件直接 import（数据量小，无需懒加载）：

```ts
import EnrollmentPlanChart from './components/EnrollmentPlanChart';
```

### 3.3 移动端 TabBar

`src/components/MobileTabBar.tsx` 的 `tabs` 数组（9–17 行）同步新增，标签缩短为「计划」（与现有"趋势/对比/热力"等 2 字标签风格一致），图标同样用 `ClipboardList`：

```ts
{ id: 'plan' as TabType, label: '计划', icon: ClipboardList },
```

> 注意：移动端 TabBar 将从 7 项增至 8 项，需在真机/窄屏验证横向不溢出；`flex-1 min-w-0` 已具备自适应基础。

### 3.4 category 筛选

全局 category 下拉保持显示（维持 UI 一致），但对本 Tab 无作用。本 Tab 组件不接收 `category` prop。

## 4. 数据结构（复用，不修改）

`src/data/enrollmentPlan.ts` 已导出：

```ts
interface MajorPlan { name: string; num: number; length: string; xuanke: string; }
interface YearPlan   { totalPlan: number; majors: MajorPlan[]; }
interface EnrollmentPlan        { [year: string]: YearPlan; }
interface EnrollmentPlanData    { [university: string]: EnrollmentPlan; }
export const enrollmentPlanData: EnrollmentPlanData;
```

## 5. 组件设计：EnrollmentPlanChart

- 文件：`src/components/EnrollmentPlanChart.tsx`
- 签名：`export default function EnrollmentPlanChart({ university }: { university: string })`
- 内部状态（对齐 HeatmapChart 既有交互）：`searchQuery`（专业搜索）、`hoveredCell`、`showUniCard`、移动端 `mobileViewMode: 'card' | 'table'`、`useIsMobile()`

### 5.1 数据派生（useMemo，依赖 university）

1. `uniPlan = enrollmentPlanData[university]`，若为空对象 → 渲染空状态。
2. 年份列固定 `YEARS = [2021, 2022, 2023, 2024, 2025]`。
3. 专业并集：遍历 `uniPlan` 各年的 `majors[].name`，去重收集。
4. 排序：按该专业在 5 年中的 `num` 合计降序。
5. 归一化区间：收集当前校所有有效 `num`，得 `minNum`/`maxNum`。

### 5.2 单元格取值

```ts
function getCell(majorName: string, year: number): MajorPlan | null {
  const yp = uniPlan[String(year)];
  if (!yp) return null;
  return yp.majors.find(m => m.name === majorName) ?? null;
}
```

### 5.3 颜色映射（方案 A：人数多=暖红）

复用 `HeatmapChart` 的 6 档色阶与阈值，归一化方式与 `getScoreColor` 一致：

```ts
function getPlanColor(num: number, minNum: number, maxNum: number) {
  const normalized = (num - minNum) / (maxNum - minNum + 1);
  if (normalized > 0.85) return { bg: 'rgba(239, 68, 68, 0.85)', text: '#fff' };   // 红
  if (normalized > 0.70) return { bg: 'rgba(249, 115, 22, 0.75)', text: '#fff' };  // 橙
  if (normalized > 0.55) return { bg: 'rgba(245, 158, 11, 0.65)', text: '#1a1a1a' };// 黄
  if (normalized > 0.40) return { bg: 'rgba(132, 204, 22, 0.55)', text: '#1a1a1a' };// 黄绿
  if (normalized > 0.25) return { bg: 'rgba(34, 197, 94, 0.55)',  text: '#fff' };   // 绿
  return { bg: 'rgba(6, 182, 212, 0.45)', text: '#fff' };                          // 青
}
```

### 5.4 单元格内容

- 主显示：`num`（粗体）
- 桌面端：色块使用原生 `title` 属性，hover 显示 `"{num}人 · {length} · {xuanke}"`（如 "18人 · 四年 · 首选物理，再选不限"），不引入自定义 tooltip 组件
- 移动端卡片视图：每张卡片头部一行显示专业名，第二行以 `text-[10px] truncate` 显示该专业最近有数据年份的选科要求；下方为 5 个年份色块
- 空单元格：与 HeatmapChart 一致的虚线框 "-"

### 5.5 标题区

- 主标题：`{university} · 招生计划`（校名可点击 → `UniversityCard`）
- 副标题：`2021–2025` + 各年 `totalPlan` 汇总，如 `2021: 18 · 2022: 18 · 2023: 18 · 2024: 18 · 2025: 25`
- 说明小字：颜色越暖表示该专业当年招生人数越多

### 5.6 复用特性

专业搜索框（含计数 `显示 X / Y 个专业`）、移动端卡片/表格视图切换、色阶图例（标注"人数少 → 人数多"）、桌面端横向滚动表格。

## 6. 边界处理

| 情况 | 处理 |
|---|---|
| `enrollmentPlanData[university]` 为空/不存在 | 居中空状态："暂无 {校名} 的招生计划数据" |
| 某 `year` 整年无数据 | 该列所有单元格虚线框 "-" |
| 某专业某年无数据 | 单个单元格虚线框 "-" |
| 全校仅 1 个有效 num（min==max） | `maxNum - minNum + 1` 分母兜底，避免除零；单值归一化为该档 |
| 搜索无结果 | 显示"未找到匹配专业"提示 |

## 7. 不做的事（YAGNI）

- 不做 category 筛选（数据无此字段）
- 不与录取数据专业做强制对齐
- 不重新抓取/补全数据（用现有 99 所）
- 不做"分数/位次"切换（本 Tab 仅展示招生计划）
- 不修改 `enrollmentPlan.ts` 数据结构

## 8. 涉及文件

| 文件 | 操作 |
|---|---|
| `src/components/EnrollmentPlanChart.tsx` | 新建 |
| `src/context/AppContext.tsx` | 修改：`TabType` 加 `'plan'` |
| `src/App.tsx` | 修改：import、`tabs` 数组、渲染分支 |
| `src/components/MobileTabBar.tsx` | 修改：`tabs` 数组、import 图标 |
| `src/data/enrollmentPlan.ts` | 不修改（复用） |

## 9. 验收条件

1. 桌面端顶部 Tab 栏与移动端底部 TabBar 均出现「招生计划 / 计划」入口，点击切换正常，激活态高亮。
2. 选中存在数据的学校（如北京大学）：以表格展示其所有专业 × 2021–2025，每个单元格显示计划人数，背景色按人数多→少呈红→青渐变，颜色方向为「人数多=暖红」。
3. 单元格 hover（桌面）或展开（移动卡片）显示学制与选科要求。
4. 标题区显示各年 `totalPlan` 汇总。
5. 专业搜索框可按名称过滤，计数正确。
6. 选中不存在招生计划数据的学校：显示空状态提示，不报错、不白屏。
7. 某年/某专业缺数据：对应单元格显示虚线框 "-"，其余正常。
8. 明暗主题下文字与色块均清晰可读（参考近期提交对暗色模式的处理）。
9. 移动端窄屏下 TabBar 8 项不溢出、表格可横向滚动。
10. `npm run build`（`tsc -b && vite build`）通过，无 TypeScript 错误。
