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
