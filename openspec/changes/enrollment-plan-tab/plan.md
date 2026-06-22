# 招生计划 Tab 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在顶部导航新增独立「招生计划」Tab，以热力图样式（专业×年份，人数多=暖红）展示当前选中学校每个专业每年的招生计划人数。

**Architecture:** 复用已就绪的 `enrollmentPlanData`（99 校，2021–2025），新建 `EnrollmentPlanChart` 组件，视觉模式对齐现有 `HeatmapChart`（桌面表格 + 移动卡片/表格切换 + 搜索 + 色阶图例）。通过扩展 `TabType` 并在 `App.tsx`、`MobileTabBar.tsx` 注册新 Tab 接入。

**Tech Stack:** React 18 + TypeScript (strict) + Vite 6 + Tailwind CSS 3.4 + lucide-react。无测试框架——验证用 `tsc` 类型检查 + `npm run dev` 浏览器核对 + `npm run build`（遵循项目 verification-before-completion 约定）。

**关联设计文档：** `openspec/changes/enrollment-plan-tab/design.md`

---

## File Structure

| 文件 | 操作 | 职责 |
|---|---|---|
| `src/context/AppContext.tsx` | 修改 | `TabType` 联合类型加 `'plan'` |
| `src/components/EnrollmentPlanChart.tsx` | 新建 | 招生计划热力图组件（数据派生、颜色映射、桌面/移动视图、搜索、图例、边界） |
| `src/App.tsx` | 修改 | 桌面 tabs 注册「招生计划」+ 渲染分支 + import 图标与组件 |
| `src/components/MobileTabBar.tsx` | 修改 | 移动端 tabs 注册「计划」+ import 图标 |

---

## Task 1: 扩展 TabType 类型

**Files:**
- Modify: `src/context/AppContext.tsx:3`

- [ ] **Step 1: 修改 TabType 联合类型**

将 `src/context/AppContext.tsx:3` 的：

```ts
export type TabType = 'trend' | 'compare' | 'recommend' | 'heatmap' | 'bar' | 'table' | 'sources';
```

改为：

```ts
export type TabType = 'trend' | 'compare' | 'recommend' | 'heatmap' | 'bar' | 'plan' | 'table' | 'sources';
```

- [ ] **Step 2: 类型检查通过**

Run: `npx tsc -b --noEmit`
Expected: 无错误退出（exit 0）。`'plan'` 此时未被引用，纯类型扩展不破坏任何现有代码。

- [ ] **Step 3: Commit**

```bash
git add src/context/AppContext.tsx
git commit -m "feat(plan): TabType 增加 'plan' 类型"
```

---

## Task 2: 创建 EnrollmentPlanChart 组件

**Files:**
- Create: `src/components/EnrollmentPlanChart.tsx`

- [ ] **Step 1: 写入完整组件代码**

创建 `src/components/EnrollmentPlanChart.tsx`，完整内容如下：

```tsx
import { useMemo, useState } from 'react';
import { enrollmentPlanData } from '../data/enrollmentPlan';
import { ClipboardList, Search, X } from 'lucide-react';
import UniversityCard from './UniversityCard';
import { useIsMobile } from '../hooks/useIsMobile';

const YEARS = [2021, 2022, 2023, 2024, 2025];

// 6 档色阶：人数越多越暖（红），阈值与 HeatmapChart.getScoreColor 一致
function getPlanColor(num: number, minNum: number, maxNum: number) {
  const normalized = (num - minNum) / (maxNum - minNum + 1);
  if (normalized > 0.85) return { bg: 'rgba(239, 68, 68, 0.85)', text: '#fff' };
  if (normalized > 0.70) return { bg: 'rgba(249, 115, 22, 0.75)', text: '#fff' };
  if (normalized > 0.55) return { bg: 'rgba(245, 158, 11, 0.65)', text: '#1a1a1a' };
  if (normalized > 0.40) return { bg: 'rgba(132, 204, 22, 0.55)', text: '#1a1a1a' };
  if (normalized > 0.25) return { bg: 'rgba(34, 197, 94, 0.55)', text: '#fff' };
  return { bg: 'rgba(6, 182, 212, 0.45)', text: '#fff' };
}

export default function EnrollmentPlanChart({ university }: { university: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUniCard, setShowUniCard] = useState(false);
  const isMobile = useIsMobile();
  const [mobileViewMode, setMobileViewMode] = useState<'card' | 'table'>('card');

  // 数据派生：专业并集（按 5 年合计降序）+ 归一化区间 + 各年总计划
  const { majors, minNum, maxNum, totalPlanByYear, hasData } = useMemo(() => {
    const uniPlan = enrollmentPlanData[university] || {};
    const hasData = Object.keys(uniPlan).length > 0;

    const sumByMajor = new Map<string, number>();
    for (const yr of YEARS) {
      const yp = uniPlan[String(yr)];
      if (!yp) continue;
      for (const m of yp.majors) {
        sumByMajor.set(m.name, (sumByMajor.get(m.name) || 0) + m.num);
      }
    }
    const majors = Array.from(sumByMajor.keys()).sort(
      (a, b) => (sumByMajor.get(b) || 0) - (sumByMajor.get(a) || 0)
    );

    let minNum = Infinity;
    let maxNum = -Infinity;
    for (const yr of YEARS) {
      const yp = uniPlan[String(yr)];
      if (!yp) continue;
      for (const m of yp.majors) {
        if (m.num < minNum) minNum = m.num;
        if (m.num > maxNum) maxNum = m.num;
      }
    }
    if (!isFinite(minNum)) { minNum = 0; maxNum = 1; }

    const totalPlanByYear: Record<number, number | null> = {};
    for (const yr of YEARS) {
      const yp = uniPlan[String(yr)];
      totalPlanByYear[yr] = yp ? yp.totalPlan : null;
    }

    return { majors, minNum, maxNum, totalPlanByYear, hasData };
  }, [university]);

  const displayMajors = useMemo(() => {
    if (!searchQuery.trim()) return majors;
    const q = searchQuery.toLowerCase();
    return majors.filter(m => m.toLowerCase().includes(q));
  }, [majors, searchQuery]);

  const getCell = (majorName: string, year: number) => {
    const yp = (enrollmentPlanData[university] || {})[String(year)];
    if (!yp) return null;
    return yp.majors.find(m => m.name === majorName) ?? null;
  };

  // 空状态：该校无招生计划数据
  if (!hasData) {
    return (
      <div className="animate-fade-in">
        <div className="mb-4 md:mb-6 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-serif-cn font-bold ink-text">{university} · 招生计划</h2>
        </div>
        <div className="bg-card rounded-xl border border-border/60 p-12 shadow-card text-center">
          <p className="text-sm text-muted-foreground">暂无 {university} 的招生计划数据</p>
        </div>
      </div>
    );
  }

  const yearSummary = YEARS
    .map(y => (totalPlanByYear[y] == null ? null : `${y}: ${totalPlanByYear[y]}`))
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="animate-fade-in">
      {/* 标题区 */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-2">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-serif-cn font-bold ink-text">
            <button onClick={() => setShowUniCard(true)} className="hover:underline cursor-pointer">
              {university}
            </button>{' '}
            · 招生计划
          </h2>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">
          2021–2025 各专业计划招生人数 · 颜色越暖表示当年招生人数越多
        </p>
        {yearSummary && (
          <p className="text-xs text-muted-foreground mt-1 font-mono">全校总计划：{yearSummary}</p>
        )}
      </div>

      {/* 专业搜索框 */}
      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="搜索专业名称..."
            className="w-full h-9 rounded-lg border border-input bg-background pl-9 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <span className="text-xs text-muted-foreground">
          显示 {displayMajors.length} / {majors.length} 个专业
        </span>
      </div>

      {/* 移动端卡片视图 */}
      {isMobile && mobileViewMode === 'card' ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">{displayMajors.length} 个专业</span>
            <button onClick={() => setMobileViewMode('table')} className="text-xs text-primary hover:underline">
              切换到表格视图
            </button>
          </div>
          {displayMajors.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">未找到匹配专业</p>
          )}
          {displayMajors.map(major => {
            const cells = YEARS.map(y => getCell(major, y));
            const validCells = cells.filter((c): c is NonNullable<typeof c> => c !== null);
            const latest = validCells[validCells.length - 1];
            return (
              <div key={major} className="bg-card rounded-xl border border-border/60 p-3 shadow-card-sm">
                <span className="text-sm font-medium">{major}</span>
                {latest && (
                  <p className="text-[10px] text-muted-foreground truncate mb-2">{latest.xuanke}</p>
                )}
                <div className="flex gap-1.5 overflow-x-auto scrollbar-thin">
                  {YEARS.map((y, yi) => {
                    const cell = cells[yi];
                    if (!cell) {
                      return (
                        <div
                          key={y}
                          className="flex flex-col items-center rounded-lg px-2 py-1.5 min-w-[56px] shrink-0 border-2 border-dashed border-border/60"
                        >
                          <span className="text-[11px] text-muted-foreground/40">-</span>
                          <span className="text-[10px] text-muted-foreground/40">{y}</span>
                        </div>
                      );
                    }
                    const color = getPlanColor(cell.num, minNum, maxNum);
                    return (
                      <div
                        key={y}
                        className="flex flex-col items-center rounded-lg px-2 py-1.5 min-w-[56px] shrink-0"
                        style={{ backgroundColor: color.bg, color: color.text }}
                        title={`${cell.num}人 · ${cell.length} · ${cell.xuanke}`}
                      >
                        <span className="text-[11px] font-bold">{cell.num}</span>
                        <span className="text-[10px] opacity-60">{y}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* 桌面端 + 移动端表格视图 */
        <div>
          {isMobile && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">
                {displayMajors.length} 个专业 · 横向滚动查看
              </span>
              <button onClick={() => setMobileViewMode('card')} className="text-xs text-primary hover:underline">
                切换到卡片视图
              </button>
            </div>
          )}
          <div className="bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[200px]">
                    专业名称
                  </th>
                  {YEARS.map(y => (
                    <th
                      key={y}
                      className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[90px]"
                    >
                      {y}年
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayMajors.length === 0 && (
                  <tr>
                    <td colSpan={YEARS.length + 1} className="text-center text-sm text-muted-foreground py-8">
                      未找到匹配专业
                    </td>
                  </tr>
                )}
                {displayMajors.map(major => (
                  <tr key={major} className="hover:bg-secondary/30 transition-colors">
                    <td className="text-sm font-medium p-3 border-b border-border">{major}</td>
                    {YEARS.map(y => {
                      const cell = getCell(major, y);
                      if (!cell) {
                        return (
                          <td key={y} className="text-center p-2 border-b border-border">
                            <span className="inline-flex items-center justify-center w-[72px] h-[42px] rounded-lg border-2 border-dashed border-border/60 text-xs text-muted-foreground/40">
                              -
                            </span>
                          </td>
                        );
                      }
                      const color = getPlanColor(cell.num, minNum, maxNum);
                      return (
                        <td key={y} className="text-center p-2 border-b border-border">
                          <div
                            className="inline-flex flex-col items-center justify-center rounded-lg p-2 min-w-[72px] transition-all duration-200 cursor-default hover:scale-[1.02]"
                            style={{ backgroundColor: color.bg, color: color.text }}
                            title={`${cell.num}人 · ${cell.length} · ${cell.xuanke}`}
                          >
                            <span className="text-xs font-bold">{cell.num}</span>
                            <span className="text-[10px] opacity-75">人</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 色阶图例 */}
      <div className="mt-4 p-4 rounded-xl bg-card border border-border/60 shadow-card card-shine">
        <h3 className="text-xs font-semibold text-muted-foreground mb-3">
          招生人数色阶（人数越多颜色越暖）
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground mr-2">少</span>
          <div className="flex gap-0.5">
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(6, 182, 212, 0.45)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(34, 197, 94, 0.55)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(132, 204, 22, 0.55)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(245, 158, 11, 0.65)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(249, 115, 22, 0.75)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(239, 68, 68, 0.85)' }} />
          </div>
          <span className="text-xs text-muted-foreground ml-2">多</span>
        </div>
      </div>

      {showUniCard && <UniversityCard university={university} onClose={() => setShowUniCard(false)} />}
    </div>
  );
}
```

- [ ] **Step 2: 类型检查通过**

Run: `npx tsc -b --noEmit`
Expected: 无错误退出。组件尚未接入路由，但作为独立模块必须类型正确（重点检查 `enrollmentPlanData`、`useIsMobile`、`UniversityCard` 的导入与 props 匹配）。

- [ ] **Step 3: Commit**

```bash
git add src/components/EnrollmentPlanChart.tsx
git commit -m "feat(plan): 新建 EnrollmentPlanChart 招生计划热力图组件"
```

---

## Task 3: App.tsx 桌面端集成

**Files:**
- Modify: `src/App.tsx`（import 区、tabs 数组、渲染分支）

- [ ] **Step 1: 追加 import**

在 `src/App.tsx` 顶部 lucide-react import 行（约 20 行）追加 `ClipboardList`。将：

```ts
import { GraduationCap, TrendingUp, BarChart3, Table2, BookOpen, Sun, Moon, Monitor, Target, ChevronDown, SlidersHorizontal, Search } from 'lucide-react';
```

改为：

```ts
import { GraduationCap, TrendingUp, BarChart3, Table2, BookOpen, Sun, Moon, Monitor, Target, ChevronDown, SlidersHorizontal, Search, ClipboardList } from 'lucide-react';
```

- [ ] **Step 2: import 组件**

在 `src/App.tsx` 现有组件 import 区（`import HeatmapChart from './components/HeatmapChart';` 附近，约第 7 行后）新增一行：

```ts
import EnrollmentPlanChart from './components/EnrollmentPlanChart';
```

- [ ] **Step 3: tabs 数组插入新项**

在 `src/App.tsx` 的 `tabs` 数组（约 72–80 行）中，在 `heatmap` 项之后、`table` 项之前插入：

```ts
    { id: 'plan' as TabType, label: '招生计划', icon: ClipboardList },
```

插入后该片段应为：

```ts
    { id: 'heatmap' as TabType, label: '热力图', icon: BarChart3 },
    { id: 'plan' as TabType, label: '招生计划', icon: ClipboardList },
    { id: 'table' as TabType, label: '数据表', icon: Table2 },
```

- [ ] **Step 4: 渲染分支**

在 `src/App.tsx` 渲染区（约 199–205 行，`activeTab === 'heatmap'` 分支之后、`activeTab === 'bar'` 分支之前）插入：

```tsx
          {activeTab === 'plan' && (
            <EnrollmentPlanChart university={selectedUniversity} />
          )}
```

- [ ] **Step 5: 类型检查通过**

Run: `npx tsc -b --noEmit`
Expected: 无错误退出。

- [ ] **Step 6: 浏览器验证**

Run: `npm run dev`（默认 5173 端口）
打开浏览器 → 桌面端顶部 Tab 栏应出现「招生计划」入口（位于「热力图」与「数据表」之间），点击后显示「北京大学 · 招生计划」标题、专业搜索框、表格（理科试验班类 等专业 × 2021–2025，单元格为带颜色的人数）、色阶图例。

- [ ] **Step 7: Commit**

```bash
git add src/App.tsx
git commit -m "feat(plan): 桌面端 Tab 栏接入「招生计划」入口"
```

---

## Task 4: MobileTabBar 移动端集成

**Files:**
- Modify: `src/components/MobileTabBar.tsx`（import、tabs 数组）

- [ ] **Step 1: import 追加图标**

将 `src/components/MobileTabBar.tsx:1`：

```ts
import { TrendingUp, BarChart3, Target, Table2, BookOpen, ArrowLeftRight, Grid3x3 } from 'lucide-react';
```

改为：

```ts
import { TrendingUp, BarChart3, Target, Table2, BookOpen, ArrowLeftRight, Grid3x3, ClipboardList } from 'lucide-react';
```

- [ ] **Step 2: tabs 数组插入新项**

在 `src/components/MobileTabBar.tsx` 的 `tabs` 数组（9–17 行）中，`heatmap` 项之后、`table` 项之前插入（移动端标签缩短为「计划」）：

```ts
  { id: 'plan' as TabType, label: '计划', icon: ClipboardList },
```

插入后该片段应为：

```ts
  { id: 'heatmap' as TabType, label: '热力', icon: Grid3x3 },
  { id: 'plan' as TabType, label: '计划', icon: ClipboardList },
  { id: 'table' as TabType, label: '数据', icon: Table2 },
```

- [ ] **Step 3: 类型检查通过**

Run: `npx tsc -b --noEmit`
Expected: 无错误退出。

- [ ] **Step 4: 浏览器验证（移动端）**

`npm run dev` 运行中 → 浏览器开发者工具切到移动视口（如 iPhone SE 375px）→ 底部 TabBar 应出现「计划」入口（8 项不溢出），点击切换到招生计划视图（默认卡片模式）。

- [ ] **Step 5: Commit**

```bash
git add src/components/MobileTabBar.tsx
git commit -m "feat(plan): 移动端 TabBar 接入「计划」入口"
```

---

## Task 5: 全量验证（验收条件 + 暗色模式 + 生产构建）

**Files:**
- 无代码改动（仅验证）；如发现问题则就地修复并补充 commit。

- [ ] **Step 1: 启动开发服务器**

Run: `npm run dev`

- [ ] **Step 2: 逐条核对验收条件（设计文档第 9 节）**

桌面端选中「北京大学」逐项确认：
1. 桌面顶部 + 移动底部均有入口，激活态高亮 ✓
2. 表格展示专业 × 2021–2025，单元格人数 + 颜色（人数多=红，少=青）✓
3. 桌面单元格 hover 显示原生 tooltip「{num}人 · {学制} · {选科}」✓
4. 标题区显示「全校总计划：2021: 18 · 2022: 18 · ...」✓
5. 搜索框过滤专业，计数「显示 X / Y」正确 ✓
6. 切换到无数据学校（在高校选择里挑一所非 99 所的，如「北京体育大学」若存在）：显示空状态提示 ✓
7. 某专业某年缺数据：单元格虚线框「-」✓
8. 暗色模式（右上角主题切换 → 深色）：标题文字、色块、图例、表格均清晰可读 ✓
9. 移动窄屏（375px）：TabBar 8 项不溢出，表格横向滚动，卡片视图正常 ✓

- [ ] **Step 3: 生产构建**

Run: `npm run build`
Expected: `tsc -b` 与 `vite build` 均成功，无 TypeScript 错误，无构建失败。

- [ ] **Step 4: 修复（仅当上一步发现问题）**

若暗色模式下某处不可读、或 TabBar 溢出、或类型错误，就地修复对应文件，回到 Step 2 重核对应项，然后：

```bash
git add <修改的文件>
git commit -m "fix(plan): <具体问题描述>"
```

若无问题，跳过本步。

- [ ] **Step 5: 最终确认**

确认所有验收条件通过、`npm run build` 成功。本任务无新增 commit（除非 Step 4 修复）。

---

## Self-Review

**1. Spec coverage（对照 design.md 各节）:**
- §3.1 TabType `'plan'` → Task 1 ✓
- §3.2 桌面 tabs + 渲染分支 + import → Task 3 ✓
- §3.3 移动 tabs + import → Task 4 ✓
- §3.4 category 不参与筛选 → Task 2 组件不接收 category prop ✓
- §4 复用数据结构 → Task 2 直接读 `enrollmentPlanData` ✓
- §5.1 数据派生（专业并集、合计降序、归一化）→ Task 2 useMemo ✓
- §5.2 getCell → Task 2 ✓
- §5.3 颜色方案 A（6 档、人数多=暖红、`+1` 兜底）→ Task 2 `getPlanColor` ✓
- §5.4 单元格 title「学制·选科」+ 移动卡片选科 → Task 2 ✓
- §5.5 标题区 totalPlan 汇总 → Task 2 ✓
- §5.6 搜索/移动切换/图例/UniversityCard → Task 2 ✓
- §6 边界（空状态/缺年/缺专业/单值兜底/搜索无结果）→ Task 2 ✓
- §9 验收条件 1–10 → Task 5 逐条核对 ✓

**2. Placeholder scan:** 无 TBD/TODO；每个代码 step 均含完整可运行代码或精确 diff；无「类似 Task N」「适当处理」等模糊语。✓

**3. Type consistency:** `TabType` 含 `'plan'`（Task 1）与 Task 3/4 引用一致；`EnrollmentPlanChart` props `{ university: string }`（Task 2）与 Task 3 调用 `<EnrollmentPlanChart university={selectedUniversity} />` 一致；`getPlanColor`/`getCell`/`useMemo` 返回字段（`majors`/`minNum`/`maxNum`/`totalPlanByYear`/`hasData`）定义与使用一致。✓
