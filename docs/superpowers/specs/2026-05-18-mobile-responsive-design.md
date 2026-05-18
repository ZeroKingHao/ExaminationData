# 移动端响应式适配设计

## 背景

当前项目主要为桌面端设计，移动端适配处于初步阶段。核心问题：横向柱状图 margin 吃掉大部分绘图空间、热力图/数据表格列数过多在手机上几乎不可用、Header 控件在窄屏挤压严重。

## 设计决策

- **实现方案**：Tailwind 响应式断点 + 条件渲染（方案 A），以 `md:`（768px）为移动端/桌面端分界点
- **图表策略**：布局重排 + 简化视图
- **导航策略**：移动端底部 Tab 栏
- **筛选策略**：折叠到筛选抽屉

## 全局布局与导航

### 底部 Tab 栏（< 768px）

- 顶部 Tab 消失（`md:hidden`），底部出现固定定位 Tab 栏
- 5 个 Tab 图标 + 文字标签，高度 56px
- 添加 `pb-safe` / `env(safe-area-inset-bottom)` 适配 iPhone 底部安全区域
- 内容区预留 `pb-16` 底部间距

### Header 简化（< 768px）

- Header 只保留标题 + 右侧筛选图标按钮
- 点击筛选图标从底部滑出抽屉面板，包含：分类选择、年份选择、搜索、收藏、主题切换
- 抽屉面板：`fixed bottom-0 left-0 right-0`，最大高度 80vh，支持下滑关闭

### useIsMobile Hook

- 基于 `window.matchMedia('(max-width: 767px)')` 返回布尔值
- 监听窗口变化实时更新
- 供组件内部做条件渲染（图表布局切换等）

## 组件适配

### TrendChart

- 筛选栏（年份范围、筛选条件）在移动端折叠为单行，下拉选择器全宽显示
- 子视图切换器改为横向可滚动的紧凑按钮组
- 图表高度从 460px 降为 320px
- 横向柱状图 Y 轴 margin 从 `left: 200` 缩减到 `left: 100`，高校名称截断显示
- 趋势指标卡片 grid-cols-2 保持不变

### BarChart

- 移动端改为**纵向柱状图**，X 轴显示高校名称（旋转 45°），Y 轴显示数值
- 图表高度增加以容纳纵向布局，支持纵向滚动
- 搜索和筛选栏全宽堆叠

### HeatmapChart

- 移动端新增**卡片列表**模式：每张卡片代表一个专业，卡片内纵向排列各年份数据
- 默认显示卡片模式，提供视图切换：卡片模式 / 原始表格模式（横向滚动）
- 子视图切换（位次/分数）保持为紧凑按钮

### DataTable

- 移动端精简列模式：只显示年份、专业、最低分、最低位次 4 列
- 点击行展开显示完整信息（平均分、招生人数等）
- 或提供卡片列表视图，每张卡片一条记录

### CompareView

- 图表适配同 TrendChart（缩减 margin）
- 对比表格全宽 + 横向滚动

## 弹窗与面板

### FavoritesPanel

- 桌面端保持右侧滑出面板
- 移动端改为底部滑出抽屉：宽度 100%，最大高度 70vh，支持下滑关闭

### UniversityCard

- 移动端改为全屏弹窗（`w-full h-full`）
- 关闭按钮放大至 44×44px 方便触摸

### GlobalSearch

- 移动端搜索框全宽显示
- 搜索结果改为全宽下拉列表

## 触摸与体验优化

- 所有可点击元素最小触摸区域 44×44px
- Tab 按钮间距增大
- 图表 tooltip 改为点击触发（替代 hover）
- `index.css` 添加 `-webkit-tap-highlight-color: transparent`
- 添加 `overscroll-behavior: contain` 防止页面弹性滚动干扰局部滚动

## 实现范围

- 新增 `useIsMobile` Hook
- 新增 `MobileTabBar` 组件
- 新增 `FilterDrawer` 组件
- 修改 `App.tsx`（布局 + 导航 + 条件渲染）
- 修改 `TrendChart.tsx`、`BarChart.tsx`、`HeatmapChart.tsx`、`DataTable.tsx`、`CompareView.tsx`
- 修改 `FavoritesPanel.tsx`、`UniversityCard.tsx`、`GlobalSearch.tsx`
- 修改 `index.css`（全局触摸优化）
