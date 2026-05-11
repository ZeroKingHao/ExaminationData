# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

河北省985/211高校录取数据分析平台 — 静态单页应用，展示2021-2025年物理类录取数据（分数、位次、招生计划）。数据全部内嵌于TypeScript文件中，无后端API。

## 常用命令

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (默认端口5173)
npm run build        # 生产构建 (tsc -b && vite build)
npm run preview      # 预览生产构建
```

无测试框架配置。

## 技术栈

React 18 + TypeScript (strict) + Vite 6 + Tailwind CSS 3.4 + Recharts + lucide-react

样式方案：shadcn/ui 风格的 CSS 自定义属性系统，支持明暗主题（class-based darkMode）。

## 架构要点

**数据层** (`src/data/`):
- `admissionData.ts` — 核心数据模块，合并3个分片数据文件，导出 `admissionData` 数组及查询函数 (`getUniversities()`, `getDataByUniversity()` 等)
- `scoreRankData.ts` — 一分一段表查询（位次↔分数互查），由 `DataSourceList` 懒加载使用
- `officialData1/2/3.ts` — 录取记录分片（共9462条，120所高校）

**组件层** (`src/components/`):
- `App.tsx` 管理全局状态（`selectedUniversity`, `selectedCategory`, `selectedYear`, `activeTab`），通过 props 传递，无状态管理库
- Tab 切换：TrendChart | BarChart | HeatmapChart | DataTable | DataSourceList（懒加载）
- `ThemeProvider.tsx` — 主题上下文（明/暗/跟随系统，localStorage持久化）

**路径别名**: `@/` 映射到 `./src/`

## 数据处理脚本（离线执行）

```bash
node extract_data.cjs              # 从 raw_data/*.xlsx 提取985/211数据 → official_data.json
node generate_frontend_data.cjs    # 清洗JSON → src/data/officialData*.ts
python generate_real_score_rank.py # 解析一分一段表markdown → src/data/scoreRankData.ts
```

## 开发注意事项

- UI语言为中文，代码注释为中文，变量名为英文
- 组件直接查询 `admissionData` 模块获取数据，无需API调用
- 修改数据结构时需同步更新 `admissionData.ts` 中的 `UniversityData` 接口
- `DataSourceList` 使用 `React.lazy()` 懒加载，因其依赖145KB+的一分一段表数据

## OpenSpec + Superpowers 协同工作流

**核心原则：**
- **OpenSpec** 管"做什么"：一切变更必须通过 proposal → specs → tasks 的规范驱动流程，不得直接改代码。
- **Superpowers** 管"怎么做"：强制执行 brainstorming、code review 等工程纪律，禁止裸写生产代码。
- 所有中间产物持久化为仓库中的 Markdown 文件，允许安全清空上下文。

### 避坑铁律

1. **绝不能绕过流程直接改代码** — 任何修改都必须先更新提案或规格文档，否则会导致规范与代码脱节。
2. **规格必须精确** — 禁止模糊用语，必须精确到接口签名、数据字段、具体验收条件。
3. **前期投入，后期加速** — 需求澄清和规格编写阶段要充分碰撞和细化，前期的慢会换来实现的极速。
4. **按需裁剪** — 小修复跳过 brainstorming，直接 `/opsx:propose`；大特性走完整五步。原则是"根据需要选择能力组合"，而非机械顺序。

### 五步标准工作流

#### 1. 需求澄清（Superpowers: brainstorming）
- **指令**：`/superpowers:brainstorming 需求：[用户需求描述]`
- **目的**：识别边界、约束、成功标准与候选方案，避免模糊开始。
- **产出**：澄清后的问题定义，可作为下一步的输入。

#### 2. 规格提案（OpenSpec）
- **指令**：`/opsx:propose [经brainstorming澄清后的需求]`
- **产出**：
  - `openspec/changes/<change-id>/proposal.md`（为什么做）
  - `design.md`（技术决策与替代方案）
  - `specs/`（Delta Specs：ADDED/MODIFIED/REMOVED）
  - `tasks.md`（粗粒度任务清单）

#### 3. 计划细化（Superpowers: writing-plans）
- **指令**：`/superpowers:writing-plans 基于 openspec/changes/<change-id>/tasks.md 制定详细实施计划`
- **产出**：极细粒度计划（2-5 分钟/任务），含具体文件路径和 commit message，禁止占位符。

#### 4. 实现与审查（Superpowers: apply + review）
- **TDD 铁律**：没有 failing test 前，绝对不写生产代码；必须走 RED → GREEN → REFACTOR 循环。（本项目无测试框架，此步骤跳过，用 verification-before-completion 替代验证）
- **大型功能**：启用 subagent 模式，每个任务用全新 subagent，完成后必须通过独立审查才可合并。
- **指令序列**：
  - 启动实现：`/opsx:apply`
  - 审查：`/superpowers:requesting-code-review 审查 <change-id> 的所有代码变更`

#### 5. 闭环归档（OpenSpec: archive）
- **指令**：`/opsx:archive`
- **效果**：功能正式合入项目规范，历史记录可追溯。

### 产物流转图

```
自然语言需求
  → brainstorming（澄清定义）
  → /opsx:propose（proposal, design, specs, tasks）
  → writing-plans（细粒度执行计划）
  → /opsx:apply + review（实现 + 审查报告）
  → /opsx:archive（验证通过，归档更新）
  → git commit（需求摘要 + 改动概要）
```

### 按需裁剪规则

| 需求规模 | 流程 |
|---|---|
| 小修复（bug/样式微调） | `/opsx:propose` → `/opsx:apply` → commit |
| 中等需求（新功能/重构） | brainstorming → `/opsx:propose` → writing-plans → `/opsx:apply` → review → commit |
| 大特性（架构变更） | 完整五步 + `/opsx:archive` |

### 快速启动模板

接到新需求时，按以下顺序执行：

```
1. /superpowers:brainstorming 需求：[原始需求]
2. /opsx:propose [澄清后的需求描述]
3. /superpowers:writing-plans 基于 openspec/changes/<id>/tasks.md 细化
4. /opsx:apply
5. /superpowers:requesting-code-review 审查变更
6. /opsx:archive
7. git commit（需求摘要 + 改动概要）
```

请始终按照此流程执行，除非用户明确指出简化步骤。

### 提交信息格式

```
<需求摘要>

- 改动1概要
- 改动2概要
```
