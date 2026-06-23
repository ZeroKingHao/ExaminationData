## ADDED Requirements

### Requirement: 展示年份范围覆盖 2021 至 2026

系统 SHALL 通过 `getYears()` 返回 `[2021, 2022, 2023, 2024, 2025, 2026]` 作为统一的展示年份范围，所有年份选择器与图表年轴 MUST 基于此函数派生，不得在各组件内硬编码年份数组。

#### Scenario: 年份选择器包含 2026

- **WHEN** 渲染顶栏年份选择器或移动端筛选抽屉的年份列表
- **THEN** 列表包含 2021、2022、2023、2024、2025、2026 六个选项

#### Scenario: 组件不再硬编码年份

- **WHEN** 检查 TrendChart、CompareView、HeatmapChart、RecommendView、EnrollmentPlanChart、DataSourceList 组件源码
- **THEN** 不存在本地 `[2021, 2022, 2023, 2024, 2025]` 年份字面量，统一从 `getYears()` 获取

### Requirement: 录取数据可用性判断

系统 SHALL 提供 `hasAdmissionData(year: number): boolean`，当且仅当 `admissionData` 中存在该年份记录时返回 `true`。

#### Scenario: 2026 无录取数据

- **WHEN** 调用 `hasAdmissionData(2026)`
- **THEN** 返回 `false`

#### Scenario: 2025 有录取数据

- **WHEN** 调用 `hasAdmissionData(2025)`
- **THEN** 返回 `true`

### Requirement: 一分一段表可用性判断

系统 SHALL 提供 `hasScoreRank(year: number): boolean` 与 `getScoreRankYears(): number[]`，基于 `detailedScoreRankTable` 实际键派生。

#### Scenario: 2026 无一分一段表

- **WHEN** 调用 `hasScoreRank(2026)`
- **THEN** 返回 `false`

#### Scenario: 查询无数据年份不崩溃

- **WHEN** 调用 `getRankByScore(2026, 600)` 或 `getBachelorLine(2026)`
- **THEN** 返回 `null`，不抛出异常

### Requirement: 默认选中年份为 2026

应用初始化时全局 `selectedYear` 默认值 SHALL 为 `2026`。

#### Scenario: 首次进入应用

- **WHEN** 应用首次挂载（AppContext 初始 state）
- **THEN** 全局 `selectedYear` 为 2026

### Requirement: 招生计划视图展示真实 2026 数据

`EnrollmentPlanChart` SHALL 在年轴中显示 2026 列，并渲染 `enrollmentPlanData[university]["2026"]` 的真实招生计划数据；标题区年份范围 MUST 显示「2021–2026」。

#### Scenario: 学校有 2026 招生计划

- **WHEN** 查看「招生计划」Tab 且当前学校在 `enrollmentPlanData` 中含 `"2026"` 键
- **THEN** 2026 列显示该年各专业真实招生人数，副标题年份范围为「2021–2026」

### Requirement: 录取类视图对 2026 显示待发布占位

当某视图依赖录取数据（趋势图、高校对比、热力图、智能推荐、热度排名）且 `hasAdmissionData(2026)` 为 false 时，该视图针对 2026 SHALL 显示统一占位文案「2026 年录取数据待发布（预计 7 月公布）」；图表年轴的 2026 列 MUST 以空白 / 虚线占位呈现，不得显示伪造数据。

#### Scenario: 智能推荐选 2026

- **WHEN** 在「智能推荐」Tab 将年份选为 2026
- **THEN** 显示「2026 年录取数据待发布（预计 7 月公布）」提示，不展示基于空数据的推荐结果

#### Scenario: 热力图 2026 列占位

- **WHEN** 在「热力图」Tab 查看含 2026 年轴的热力图
- **THEN** 2026 列无颜色填充，呈现待发布占位

#### Scenario: 趋势图 2026 默认占位且可预测

- **WHEN** 「招生趋势」Tab 年轴含 2026 且未开启预测
- **THEN** 2026 数据点空白占位
- **WHEN** 用户开启预测开关
- **THEN** 2026 点显示基于 2021–2025 的预测值并标注为预测样式，年轴上不出现重复的 2026 点

### Requirement: 一分一段表视图对 2026 显示待发布占位

`DataSourceList` 的一分一段表模块在 `hasScoreRank(2026)` 为 false 时 SHALL 显示「2026 年一分一段表待发布」。

#### Scenario: 数据来源 Tab 选 2026 查一分一段表

- **WHEN** 在「数据来源」Tab 将一分一段表年份选为 2026
- **THEN** 显示「2026 年一分一段表待发布」提示，不展示空表格

### Requirement: 数据表不按年份过滤

`DataTable` SHALL 显示当前学校全部年份的录取记录，`year` prop 仅用于高亮当前选中年份的行；选 2026 时 MUST NOT 显示"无数据"空状态。

#### Scenario: 数据表选 2026

- **WHEN** 在「数据表」Tab 将年份选为 2026
- **THEN** 仍显示该校 2021–2025 的全部记录，仅无 2026 行高亮
