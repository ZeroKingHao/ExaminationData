import { useMemo, useState, useCallback } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { admissionData, getCategories, getDataByUniversity, getYears } from '../data/admissionData';
import { useAppContext } from '../context/AppContext';
import { ChartTooltip } from './ChartTooltip';
import { useIsMobile } from '../hooks/useIsMobile';
import {
  Scale,
  Search,
  X,
  Printer,
  Plus,
  TrendingUp,
  TrendingDown,
  Minus,
  BookOpen,
} from 'lucide-react';

const COMPARE_COLORS = [
  { base: 'hsl(217, 80%, 58%)', bg: 'hsla(217, 80%, 58%, 0.15)', border: 'hsla(217, 80%, 58%, 0.4)' },
  { base: 'hsl(340, 75%, 60%)', bg: 'hsla(340, 75%, 60%, 0.15)', border: 'hsla(340, 75%, 60%, 0.4)' },
  { base: 'hsl(160, 60%, 50%)', bg: 'hsla(160, 60%, 50%, 0.15)', border: 'hsla(160, 60%, 50%, 0.4)' },
  { base: 'hsl(30, 85%, 58%)', bg: 'hsla(30, 85%, 58%, 0.15)', border: 'hsla(30, 85%, 58%, 0.4)' },
  { base: 'hsl(280, 65%, 65%)', bg: 'hsla(280, 65%, 65%, 0.15)', border: 'hsla(280, 65%, 65%, 0.4)' },
];

const YEARS = getYears();

const formatRank = (v: number) => (v >= 10000 ? `${(v / 10000).toFixed(1)}万` : v.toLocaleString());

export default function CompareView() {
  const { compareList, addToCompare, removeFromCompare, selectedCategory, setSelectedCategory } =
    useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = useIsMobile();

  // 获取所有高校列表（用于搜索）
  const allUniversities = useMemo(() => {
    return [...new Set(admissionData.map((d) => d.university))].sort();
  }, []);

  // 搜索过滤
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allUniversities.filter((uni) =>
      uni.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allUniversities]);

  // 获取门类列表
  const categories = useMemo(() => getCategories(), []);

  // 为每所高校获取数据
  const universitiesData = useMemo(() => {
    return compareList.map((uni) => ({
      university: uni,
      data: getDataByUniversity(uni),
      color: COMPARE_COLORS[compareList.indexOf(uni) % COMPARE_COLORS.length].base,
    }));
  }, [compareList]);

  // 应用于当前门类筛选的数据
  const filteredUniversitiesData = useMemo(() => {
    return universitiesData.map((uni) => ({
      ...uni,
      data:
        selectedCategory === '全部'
          ? uni.data
          : uni.data.filter((d) => d.category === selectedCategory),
    }));
  }, [universitiesData, selectedCategory]);

  // 位次趋势图数据（每年取最低位次）
  const rankTrendData = useMemo(() => {
    return YEARS.map((year) => {
      const row: Record<string, number | string> = { year };
      filteredUniversitiesData.forEach((uni) => {
        const yearData = uni.data.find((d) => d.year === year);
        if (yearData) {
          row[uni.university] = yearData.minRank;
        }
      });
      return row;
    });
  }, [filteredUniversitiesData]);

  // 分数对比图数据（每年取最低分）
  const scoreComparisonData = useMemo(() => {
    return YEARS.map((year) => {
      const row: Record<string, number | string> = { year };
      filteredUniversitiesData.forEach((uni) => {
        const yearData = uni.data.find((d) => d.year === year);
        if (yearData) {
          row[uni.university] = yearData.minScore;
        }
      });
      return row;
    });
  }, [filteredUniversitiesData]);

  // 汇总表格数据
  const summaryData = useMemo(() => {
    return filteredUniversitiesData.map((uni) => {
      const data2025 = uni.data.find((d) => d.year === 2025);
      const fiveYearData = uni.data.filter((d) => d.year >= 2021);
      const avgRank =
        fiveYearData.length > 0
          ? Math.round(fiveYearData.reduce((sum, d) => sum + d.minRank, 0) / fiveYearData.length)
          : 0;
      const firstYear = uni.data.find((d) => d.year === 2021);
      const lastYear = uni.data.find((d) => d.year === 2025);
      const trend = firstYear && lastYear ? firstYear.minRank - lastYear.minRank : 0;
      const majorCount = new Set(uni.data.map((d) => d.major)).size;
      const tier = uni.data[0]?.tier || '211';

      return {
        university: uni.university,
        tier,
        avgRank,
        score2025: data2025?.minScore || '-',
        rank2025: data2025?.minRank || '-',
        majorCount,
        trend,
        color: uni.color,
      };
    });
  }, [filteredUniversitiesData]);

  const handleAddUniversity = (university: string) => {
    addToCompare(university);
    setSearchQuery('');
    setShowSearch(false);
  };

  const handlePrint = () => {
    window.print();
  };

  // 空状态
  if (compareList.length === 0) {
    return (
      <div className="animate-fade-in">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Scale className="h-5 w-5 text-primary" />
            <h2 className="text-lg md:text-2xl font-serif-cn font-bold ink-text">高校对比</h2>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">
            最多选择5所高校，对比位次趋势、分数分布和录取数据
          </p>
        </div>

        <div className="relative w-full max-w-lg">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-input bg-card hover:border-primary/50 hover:bg-accent/50 transition-all shadow-card-sm"
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {showSearch ? '收起搜索' : '搜索并添加高校...'}
              </span>
            </div>
            <Plus className="h-4 w-4 text-muted-foreground" />
          </button>
          {showSearch && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl border border-border/60 shadow-card-xl z-50 max-h-64 overflow-y-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="输入高校名称搜索..."
                className="w-full px-4 py-3 border-b border-border bg-background rounded-t-xl focus:outline-none focus:ring-1 focus:ring-ring"
                autoFocus
              />
              {searchQuery && searchResults.length > 0 ? (
                searchResults.map((uni) => (
                  <button
                    key={uni}
                    onClick={() => handleAddUniversity(uni)}
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-2"
                  >
                    <Plus className="h-3.5 w-3.5 text-primary" />
                    {uni}
                  </button>
                ))
              ) : searchQuery ? (
                <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                  未找到匹配的高校
                </div>
              ) : (
                <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                  输入高校名称开始搜索
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 bg-card/50 rounded-xl border border-dashed border-border/60 p-8 text-center">
          <Scale className="h-10 w-10 text-muted-foreground/20 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            添加高校后，即可查看位次趋势、分数分布和详细数据汇总
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Scale className="h-5 w-5 text-primary" />
          <h2 className="text-lg md:text-2xl font-serif-cn font-bold ink-text">高校对比</h2>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">
          最多5所高校录取数据叠加对比 · 位次趋势 · 分数分布 · 数据汇总
        </p>
      </div>

      {/* 选校栏 */}
      <div className="mb-6 bg-card rounded-xl border border-border/60 p-3 sm:p-4 shadow-card">
        {/* 高校标签区 */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {compareList.map((uni) => {
            const colorObj = COMPARE_COLORS[compareList.indexOf(uni) % COMPARE_COLORS.length];
            return (
              <span
                key={uni}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium border shadow-sm"
                style={{
                  backgroundColor: colorObj.bg,
                  borderColor: colorObj.border,
                  color: colorObj.base,
                }}
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colorObj.base }} />
                <span className="truncate max-w-[120px]">{uni}</span>
                <button
                  onClick={() => removeFromCompare(uni)}
                  className="ml-0.5 hover:opacity-70 transition-opacity shrink-0"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            );
          })}
          {compareList.length < 5 && (
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium border border-dashed border-border hover:border-primary/50 hover:bg-accent/50 transition-all text-muted-foreground hover:text-foreground"
              >
                <Plus className="h-3 w-3" />
                添加
              </button>
              {showSearch && (
                <div className="absolute top-full left-0 mt-2 bg-card rounded-xl border border-border/60 shadow-card-xl z-50 w-[calc(100vw-2rem)] sm:w-64 max-h-64 overflow-y-auto">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索高校..."
                    className="w-full px-3 py-2.5 border-b border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    autoFocus
                  />
                  {searchQuery && searchResults.length > 0 ? (
                    searchResults.map((uni) => (
                      <button
                        key={uni}
                        onClick={() => handleAddUniversity(uni)}
                        className="w-full px-3 py-2 text-left text-sm hover:bg-accent/50 transition-colors flex items-center gap-2"
                      >
                        <Plus className="h-3 w-3 text-primary" />
                        {uni}
                      </button>
                    ))
                  ) : searchQuery ? (
                    <div className="px-3 py-6 text-center text-xs text-muted-foreground">
                      未找到匹配高校
                    </div>
                  ) : (
                    <div className="px-3 py-6 text-center text-xs text-muted-foreground">
                      输入名称搜索
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        {/* 筛选操作区 */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-8 px-2 sm:px-3 rounded-lg border border-input bg-background text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border hover:bg-accent/50 transition-all text-xs sm:text-sm"
          >
            <Printer className="h-3.5 w-3.5" />
            打印
          </button>
        </div>
      </div>

      {/* 位次趋势叠加图 */}
      <div className="mb-6 bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine">
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
          位次趋势叠加图（Y轴逆序：越靠上 = 位次越靠前 = 热度越高）
        </h3>
        <ResponsiveContainer width="100%" height={isMobile ? 280 : 400}>
          <LineChart data={rankTrendData} margin={{ top: 10, right: isMobile ? 10 : 30, left: isMobile ? 10 : 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="year"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis
              reversed
              tickFormatter={formatRank}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              label={{
                value: '最低录取位次',
                angle: -90,
                position: 'insideLeft',
                style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 },
              }}
            />
            <Tooltip
              content={
                <ChartTooltip
                  labelFormatter={(l) => `${l}年`}
                  valueFormatter={(value, name) => [`位次: ${formatRank(Number(value))}`, name]}
                  colorMap={Object.fromEntries(
                    filteredUniversitiesData.map((uni) => [uni.university, uni.color])
                  )}
                />
              }
            />
            <Legend />
            {filteredUniversitiesData.map((uni) => (
              <Line
                key={uni.university}
                type="monotone"
                dataKey={uni.university}
                stroke={uni.color}
                strokeWidth={2.5}
                dot={{ r: 4, fill: uni.color, strokeWidth: 2, stroke: 'hsl(var(--card))' }}
                activeDot={{ r: 6, stroke: uni.color, strokeWidth: 2 }}
                connectNulls
                animationDuration={800}
                animationEasing="ease-out"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 分数分布对比 */}
      <div className="mb-6 bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine">
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
          分数分布对比（每年最低分）
        </h3>
        <ResponsiveContainer width="100%" height={isMobile ? 280 : 400}>
          <BarChart data={scoreComparisonData} margin={{ top: 10, right: isMobile ? 10 : 30, left: isMobile ? 10 : 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="year"
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              label={{
                value: '最低录取分数',
                angle: -90,
                position: 'insideLeft',
                style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 },
              }}
            />
            <Tooltip
              content={
                <ChartTooltip
                  labelFormatter={(l) => `${l}年`}
                  valueFormatter={(value, name) => [`分数: ${value}`, name]}
                  colorMap={Object.fromEntries(
                    filteredUniversitiesData.map((uni) => [uni.university, uni.color])
                  )}
                />
              }
            />
            <Legend />
            {filteredUniversitiesData.map((uni) => (
              <Bar
                key={uni.university}
                dataKey={uni.university}
                fill={uni.color}
                radius={[4, 4, 0, 0]}
                barSize={compareList.length > 3 ? 20 : 30}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 汇总对比表格 */}
      <div className="bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine">
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground">数据汇总对比</h3>
        {isMobile ? (
          <div className="space-y-3">
            {summaryData.map((item) => (
              <div key={item.university} className="p-3 rounded-lg bg-secondary/30 border border-border/40">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-medium text-sm">{item.university}</span>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium ${
                    item.tier === '985'
                      ? 'bg-chart-3/15 text-chart-3'
                      : 'bg-chart-1/15 text-chart-1'
                  }`}>
                    {item.tier}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-muted-foreground">平均位次：</span><span className="font-mono">{formatRank(item.avgRank)}</span></div>
                  <div><span className="text-muted-foreground">2025最低分：</span><span className="font-mono font-semibold">{item.score2025 !== '-' ? item.score2025 : '-'}</span></div>
                  <div><span className="text-muted-foreground">2025位次：</span><span className="font-mono">{item.rank2025 !== '-' ? formatRank(Number(item.rank2025)) : '-'}</span></div>
                  <div><span className="text-muted-foreground">专业数：</span>{item.majorCount}</div>
                </div>
                <div className="mt-2 text-xs">
                  {item.trend > 100 ? (
                    <span className="inline-flex items-center gap-1 text-red-400 font-semibold">
                      <TrendingUp className="h-3 w-3" /> 升温 +{item.trend}
                    </span>
                  ) : item.trend < -100 ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                      <TrendingDown className="h-3 w-3" /> 降温 {item.trend}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Minus className="h-3 w-3" /> 稳定
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">
                    高校名称
                  </th>
                  <th className="text-center p-3 font-semibold text-muted-foreground border-b border-border">
                    类型
                  </th>
                  <th className="text-center p-3 font-semibold text-muted-foreground border-b border-border">
                    5年平均位次
                  </th>
                  <th className="text-center p-3 font-semibold text-muted-foreground border-b border-border">
                    2025最低分
                  </th>
                  <th className="text-center p-3 font-semibold text-muted-foreground border-b border-border">
                    2025最低位次
                  </th>
                  <th className="text-center p-3 font-semibold text-muted-foreground border-b border-border">
                    专业数
                  </th>
                  <th className="text-center p-3 font-semibold text-muted-foreground border-b border-border">
                    5年趋势
                  </th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((item) => (
                  <tr key={item.university} className="border-b border-border hover:bg-secondary/30">
                    <td className="p-3 font-medium">
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      />
                      {item.university}
                    </td>
                    <td className="text-center p-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
                          item.tier === '985'
                            ? 'bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-600 border border-amber-500/20'
                            : 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-blue-600 border border-blue-500/20'
                        }`}
                      >
                        <BookOpen className="h-3 w-3" />
                        {item.tier}
                      </span>
                    </td>
                    <td className="text-center p-3 font-mono">{formatRank(item.avgRank)}</td>
                    <td className="text-center p-3 font-mono font-semibold">
                      {item.score2025 !== '-' ? item.score2025 : '-'}
                    </td>
                    <td className="text-center p-3 font-mono">
                      {item.rank2025 !== '-' ? formatRank(Number(item.rank2025)) : '-'}
                    </td>
                    <td className="text-center p-3">{item.majorCount}</td>
                    <td className="text-center p-3">
                      {item.trend > 100 ? (
                        <span className="inline-flex items-center gap-1 text-red-400 font-semibold text-xs">
                          <TrendingUp className="h-3 w-3" />
                          升温 +{item.trend}
                        </span>
                      ) : item.trend < -100 ? (
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-xs">
                          <TrendingDown className="h-3 w-3" />
                          降温 {item.trend}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-muted-foreground text-xs">
                          <Minus className="h-3 w-3" />
                          稳定
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 图例说明 */}
      <div className="mt-4 text-xs text-muted-foreground flex items-center gap-4 flex-wrap">
        <span>位次越小 = 排名越靠前 = 热度越高</span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" /> 位次上升（升温）
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-red-400" /> 位次下降（降温）
        </span>
      </div>
    </div>
  );
}
