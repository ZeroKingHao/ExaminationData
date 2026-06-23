# 招生计划趋势折线列 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在招生计划表格（`EnrollmentPlanChart`）每个专业行最右新增「趋势」列，复用提取出的公共 `MiniSparkline`；顺带修正热力图（`HeatmapChart`）趋势折线 tooltip 的年份-数值错位。

**Architecture:** 将 `HeatmapChart` 内部的局部函数 `MiniSparkline` 提取为公共组件 `src/components/MiniSparkline.tsx`；`HeatmapChart` 改为 import 并补算与有效数据对齐的 `validYears` 修复 tooltip；`EnrollmentPlanChart` import 同一组件，在共用表格（桌面 + 移动端表格）的 `thead`/`tbody` 增加趋势列与单元格，移动端卡片视图不动。

**Tech Stack:** React 18 + TypeScript (strict) + Vite 6 + Tailwind CSS。**本项目无测试框架**，TDD 的 RED/GREEN 循环用 `npm run build`（`tsc -b && vite build`）+ 浏览器手动验证替代。

**规格依据：** `openspec/changes/enrollment-plan-trend-sparkline/specs/enrollment-plan-trend/spec.md`、`design.md`。

---

## 文件结构

| 文件 | 职责 | 操作 |
|---|---|---|
| `src/components/MiniSparkline.tsx` | 公共迷你折线组件：`number[]` + 可选对齐 `years` → SVG `<polyline>`，数据 < 2 显示「-」 | 新增 |
| `src/components/HeatmapChart.tsx` | 热力图；删除局部 `MiniSparkline` 改 import；两处表格补算 `validYears` | 修改 |
| `src/components/EnrollmentPlanChart.tsx` | 招生计划；import 组件 + `getTrend` helper；共用表格加趋势列 | 修改 |

---

## Task 1: 提取公共 MiniSparkline 组件

**Files:**
- Create: `src/components/MiniSparkline.tsx`
- Modify: `src/components/HeatmapChart.tsx`（行 5–29）

- [ ] **Step 1.1: 新建 `src/components/MiniSparkline.tsx`**

```tsx
// 迷你折线图（sparkline）：把 number[] 画成一条 SVG 折线。
// 被招生计划（EnrollmentPlanChart）与热力图（HeatmapChart）的趋势列共同复用。
// years 与 data 必须等长且一一对应，用于 hover tooltip 显示「年份: 数值」。
interface MiniSparklineProps {
  data: number[];
  years?: number[];
  width?: number;
  height?: number;
}

export default function MiniSparkline({ data, years, width = 60, height = 20 }: MiniSparklineProps) {
  if (data.length < 2) return <span className="text-xs text-muted-foreground">-</span>;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(' ');

  const titleText = years ? data.map((v, i) => `${years[i] ?? '?'}: ${v.toLocaleString()}`).join('\n') : '';

  return (
    <svg width={width} height={height} className="inline-block">
      {titleText && <title>{titleText}</title>}
      <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5} points={points} />
    </svg>
  );
}
```

- [ ] **Step 1.2: `HeatmapChart.tsx` 删除局部定义、改 import**

用 Edit 将原局部函数（含上方注释）整段替换为 import。`old_string` 从行 5 的 import 起、到行 29 函数闭合止：

old_string:
```tsx
import { useIsMobile } from '../hooks/useIsMobile';

// Simple sparkline component using SVG
function MiniSparkline({ data, years, width = 60, height = 20 }: { data: number[]; years?: number[]; width?: number; height?: number }) {
  if (data.length < 2) return <span className="text-xs text-muted-foreground">-</span>;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(' ');

  const titleText = years
    ? data.map((v, i) => `${years[i] ?? '?'}: ${v.toLocaleString()}`).join('\n')
    : '';

  return (
    <svg width={width} height={height} className="inline-block">
      {titleText && <title>{titleText}</title>}
      <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5} points={points} />
    </svg>
  );
}
```

new_string:
```tsx
import { useIsMobile } from '../hooks/useIsMobile';
import MiniSparkline from './MiniSparkline';
```

> 说明：本步仅提取，**不改 tooltip**——两处调用仍为 `years={years}`，行为与改前一致，确保此 commit 单一职责。

- [ ] **Step 1.3: 构建验证**

Run: `npm run build`
Expected: 成功完成 `tsc -b` 与 `vite build`，无 TS 报错。

- [ ] **Step 1.4: 提交**

```bash
git add src/components/MiniSparkline.tsx src/components/HeatmapChart.tsx
git commit -m "refactor: 提取 MiniSparkline 为公共组件

- 从 HeatmapChart 提取局部 MiniSparkline 到 src/components/MiniSparkline.tsx
- HeatmapChart 改为 import 公共组件，行为保持不变"
```

---

## Task 2: 修正热力图 tooltip 年份对齐

**Files:**
- Modify: `src/components/HeatmapChart.tsx:247-280`（移动端表格）、`315-364`（桌面表格）

两处 bug 相同：`data={validRanks}`（过滤缺失年后）配 `years={years}`（完整年份数组），中间年份缺失时 hover tooltip 年份错位。

- [ ] **Step 2.1: 移动端表格补算 `validYears`**

Edit ①（替换行 248–249 的派生计算）：

old_string:
```tsx
                  const cells = years.map(y => getCellData(major, y));
                  const validRanks = cells.filter((c): c is NonNullable<typeof c> => c !== null).map(c => c.minRank);
                  const trend = validRanks.length >= 2 ? validRanks[validRanks.length - 1] - validRanks[0] : 0;
```

new_string:
```tsx
                  const cells = years.map(y => getCellData(major, y));
                  const validRanks: number[] = [];
                  const validYears: number[] = [];
                  cells.forEach((c, i) => {
                    if (c) { validRanks.push(c.minRank); validYears.push(years[i]); }
                  });
                  const trend = validRanks.length >= 2 ? validRanks[validRanks.length - 1] - validRanks[0] : 0;
```

Edit ②（行 280 调用处，传入对齐的 `validYears`）：

old_string:
```tsx
                      <td className="text-center p-3 border-b border-border">
                        <MiniSparkline data={validRanks} years={years} />
                      </td>
                      <td className="text-center p-3 border-b border-border">
                        <span className="text-xs font-mono">{latestEnrollment || '-'}人</span>
                      </td>
```

new_string:
```tsx
                      <td className="text-center p-3 border-b border-border">
                        <MiniSparkline data={validRanks} years={validYears} />
                      </td>
                      <td className="text-center p-3 border-b border-border">
                        <span className="text-xs font-mono">{latestEnrollment || '-'}人</span>
                      </td>
```

- [ ] **Step 2.2: 桌面表格补算 `validYears`**

Edit ①（替换行 316–317 的派生计算）：

old_string:
```tsx
              const cells = years.map(y => getCellData(major, y));
              const validRanks = cells.filter((c): c is NonNullable<typeof c> => c !== null).map(c => c.minRank);

              // 趋势：首位次差
```

new_string:
```tsx
              const cells = years.map(y => getCellData(major, y));
              const validRanks: number[] = [];
              const validYears: number[] = [];
              cells.forEach((c, i) => {
                if (c) { validRanks.push(c.minRank); validYears.push(years[i]); }
              });

              // 趋势：首位次差
```

Edit ②（行 364 调用处）：

old_string:
```tsx
                  <td className="text-center p-3 border-b border-border">
                    <MiniSparkline data={validRanks} years={years} />
                  </td>
                  <td className="text-center p-3 border-b border-border">
                    <span className="text-xs font-mono">{latestEnrollment || '-'}人</span>
                  </td>
```

new_string:
```tsx
                  <td className="text-center p-3 border-b border-border">
                    <MiniSparkline data={validRanks} years={validYears} />
                  </td>
                  <td className="text-center p-3 border-b border-border">
                    <span className="text-xs font-mono">{latestEnrollment || '-'}人</span>
                  </td>
```

> 两处 `latestEnrollment`、`trend` 仍基于 `cells`/`validRanks` 正常工作，不受影响。

- [ ] **Step 2.3: 构建验证**

Run: `npm run build`
Expected: 成功，无 TS 报错（`validYears` 已声明且被使用）。

- [ ] **Step 2.4: 提交**

```bash
git add src/components/HeatmapChart.tsx
git commit -m "fix: 修正热力图趋势折线 tooltip 年份与数值错位

- 补算 validYears，与 validRanks 同步过滤同索引年份
- 修复某专业中间年份缺失时 hover 显示错误年份的问题"
```

---

## Task 3: 招生计划表格新增「趋势」列

**Files:**
- Modify: `src/components/EnrollmentPlanChart.tsx`

> 该组件的 `else` 分支（桌面 + 移动端表格）共用同一个 `<table>`，故只需改这一处即可同时覆盖桌面与移动端表格视图；移动端卡片视图（另一分支）不动。

- [ ] **Step 3.1: import 组件 + 新增 `getTrend` helper**

Edit ①（行 5–6 之间加 import）：

old_string:
```tsx
import UniversityCard from './UniversityCard';
import { useIsMobile } from '../hooks/useIsMobile';
```

new_string:
```tsx
import UniversityCard from './UniversityCard';
import MiniSparkline from './MiniSparkline';
import { useIsMobile } from '../hooks/useIsMobile';
```

Edit ②（在 `getCell` 函数后、`// 空状态` 注释前，插入 `getTrend`）：

old_string:
```tsx
    return { num: items.reduce((s, m) => s + m.num, 0), items };
  };

  // 空状态：该校无招生计划数据
```

new_string:
```tsx
    return { num: items.reduce((s, m) => s + m.num, 0), items };
  };

  // 趋势折线数据：该专业各年有效计划人数 + 对齐年份（保证 MiniSparkline tooltip 的「年份: 人数」不错位）
  const getTrend = (majorName: string) => {
    const nums: number[] = [];
    const ys: number[] = [];
    YEARS.forEach((y) => {
      const c = getCell(majorName, y);
      if (c) { nums.push(c.num); ys.push(y); }
    });
    return { nums, years: ys };
  };

  // 空状态：该校无招生计划数据
```

- [ ] **Step 3.2: `thead` 增加最右「趋势」列**

old_string:
```tsx
                  {YEARS.map((y) => (
                    <th
                      key={y}
                      className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[90px]"
                    >
                      {y}年
                    </th>
                  ))}
                </tr>
```

new_string:
```tsx
                  {YEARS.map((y) => (
                    <th
                      key={y}
                      className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[90px]"
                    >
                      {y}年
                    </th>
                  ))}
                  <th className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[80px]">
                    趋势
                  </th>
                </tr>
```

- [ ] **Step 3.3: `tbody` 每行末尾增加趋势单元格**

`displayMajors.map` 当前为隐式返回 `(major) => (<tr>…)`，改为块体以注入 `trend`，并在 `</tr>` 前追加趋势 `<td>`。

Edit ①（改 map 开头为块体并计算 trend）：

old_string:
```tsx
                {displayMajors.map((major) => (
                  <tr key={major} className="hover:bg-secondary/30 transition-colors">
                    <td className="text-sm font-medium p-3 border-b border-border">{major}</td>
```

new_string:
```tsx
                {displayMajors.map((major) => {
                  const trend = getTrend(major);
                  return (
                  <tr key={major} className="hover:bg-secondary/30 transition-colors">
                    <td className="text-sm font-medium p-3 border-b border-border">{major}</td>
```

Edit ②（在 `</tr>` 前追加趋势单元格，并闭合块体）：

old_string:
```tsx
                    })}
                  </tr>
                ))}
              </tbody>
```

new_string:
```tsx
                    })}
                    <td className="text-center p-2 border-b border-border">
                      <MiniSparkline data={trend.nums} years={trend.years} />
                    </td>
                  </tr>
                  );
                })}
              </tbody>
```

- [ ] **Step 3.4: 构建验证**

Run: `npm run build`
Expected: 成功，无 TS 报错。

- [ ] **Step 3.5: 提交**

```bash
git add src/components/EnrollmentPlanChart.tsx
git commit -m "feat: 招生计划表格新增专业招生趋势折线列

- 表格视图每行最右新增「趋势」列，复用公共 MiniSparkline
- 数据为各年计划招生人数（同年同名合计），hover 显示「年份: 人数」
- 有效数据不足 2 点显示「-」；移动端卡片视图不加趋势列"
```

---

## Task 4: 端到端验证

- [ ] **Step 4.1: 生产构建**

Run: `npm run build`
Expected: 成功完成，无报错、无 TS warning（strict 模式）。

- [ ] **Step 4.2: 浏览器验证（dev server）**

Run: `npm run dev`，打开 `http://localhost:5173`，选一所**有招生计划数据**的高校（如清华/北大），切换到「招生计划」Tab：

- **桌面表格**：每行最右出现「趋势」列，渲染折线；hover 折线，tooltip 显示的「年份: 人数」与该行单元格逐年数值**一一对应**。
- **移动端表格视图**（DevTools 切窄屏 → 招生计划 →「切换到表格视图」）：同样出现趋势列与折线。
- **移动端卡片视图**：专业卡片中**无**趋势折线。
- **数据不足**：找一个仅 1 年或无数据的专业，趋势单元格显示「-」。
- **回归**：切到「热力图」Tab，确认趋势列折线仍正常、hover tooltip 年份与数值正确对齐（无回归）。

- [ ] **Step 4.3: （可选）若前序提交为多个，按需合并**

本计划拆为 3 个 commit（refactor / fix / feat）。如希望单一提交，可在验证通过后 `git rebase -i` 合并，或按现状保留。**默认保留三个独立 commit**，便于追溯。

---

## 自检（Self-Review）

- **Spec 覆盖**：
  - 「招生计划表格提供专业趋势列」→ Task 3（thead/tbody）+ Task 4 验证桌面/移动端表格、卡片视图不含。✅
  - 「趋势折线数据口径与单元格一致」→ Task 3 `getTrend` 复用 `getCell`（同年同名合计）。✅
  - 「缺失年份不导致 tooltip 错位」→ Task 3 `getTrend` 同步构建 `nums`/`years`；Task 2 同理修热力图。✅
  - 「数据不足时显示占位」→ `MiniSparkline`（Step 1.1）`data.length < 2 → '-'`。✅
  - 「复用统一迷你折线组件」→ Task 1 提取 + Task 2/3 共用 import。✅
- **占位符扫描**：无 TBD/TODO；每个代码步骤均含完整 old/new 代码块。✅
- **类型一致性**：`getTrend` 返回 `{ nums: number[]; years: number[] }`，`MiniSparkline` 入参 `data: number[]; years?: number[]` 一致；热力图 `validRanks`/`validYears` 均为 `number[]`。✅
