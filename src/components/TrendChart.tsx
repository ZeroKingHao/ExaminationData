import { useMemo, useState, useCallback, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from 'recharts';
import { getDataByUniversity, getMajorsByUniversity } from '../data/admissionData';
import { TrendingUp, AlertTriangle, BarChart3, Activity, Filter, ChevronDown, ChevronUp, X, Search, Inbox } from 'lucide-react';
import { ChartTooltip } from './ChartTooltip';
import UniversityCard from './UniversityCard';
import { predictNextYear } from '../utils/prediction';
import { useIsMobile } from '../hooks/useIsMobile';

const COLORS = [
  'hsl(217, 80%, 58%)',
  'hsl(160, 60%, 50%)',
  'hsl(30, 85%, 58%)',
  'hsl(280, 65%, 65%)',
  'hsl(340, 75%, 60%)',
  'hsl(190, 70%, 50%)',
  'hsl(45, 90%, 58%)',
  'hsl(100, 55%, 55%)',
  'hsl(320, 65%, 55%)',
  'hsl(255, 70%, 62%)',
  'hsl(10, 75%, 55%)',
  'hsl(200, 65%, 50%)',
  'hsl(60, 80%, 55%)',
  'hsl(130, 55%, 50%)',
  'hsl(290, 60%, 60%)',
  'hsl(350, 70%, 58%)',
  'hsl(170, 65%, 48%)',
  'hsl(220, 75%, 55%)',
  'hsl(50, 85%, 52%)',
  'hsl(310, 60%, 58%)',
];

const ALL_YEARS = [2021, 2022, 2023, 2024, 2025];

type SubView = 'rank' | 'score' | 'compare' | 'change';

interface TrendChartProps {
  university: string;
  category: string;
}

export default function TrendChart({ university, category }: TrendChartProps) {
  const [subView, setSubView] = useState<SubView>('rank');
  const [yearStart, setYearStart] = useState(2021);
  const [yearEnd, setYearEnd] = useState(2025);
  const [selectedMajors, setSelectedMajors] = useState<Set<string>>(new Set());
  const [hiddenMajors, setHiddenMajors] = useState<Set<string>>(new Set());
  const [filterOpen, setFilterOpen] = useState(false);
  const [showUniCard, setShowUniCard] = useState(false);
  const [showPrediction, setShowPrediction] = useState(true);
  const isMobile = useIsMobile();
  const data = getDataByUniversity(university);

  // 切换学校时重置筛选状态
  useEffect(() => {
    setSelectedMajors(new Set());
    setHiddenMajors(new Set());
    setFilterOpen(false);
  }, [university]);

  // 所有可选专业
  const allMajors = useMemo(() => {
    let majorList = getMajorsByUniversity(university);
    if (category !== '全部') {
      majorList = majorList.filter(m =>
        data.some(d => d.major === m && d.category === category)
      );
    }
    return majorList;
  }, [university, category, data]);

  // 实际显示的专业（用户选择 or 全部），排除被Legend点击隐藏的
  // 同时过滤掉不属于当前学校的陈旧选项，防止切换学校时显示异常
  const majors = useMemo(() => {
    const allMajorsSet = new Set(allMajors);
    const validSelected = new Set(
      Array.from(selectedMajors).filter(m => allMajorsSet.has(m))
    );
    let visible = validSelected.size > 0
      ? allMajors.filter(m => validSelected.has(m))
      : allMajors;
    return visible.filter(m => !hiddenMajors.has(m) && allMajorsSet.has(m));
  }, [allMajors, selectedMajors, hiddenMajors]);

  // 年份范围
  const years = useMemo(() => {
    return ALL_YEARS.filter(y => y >= yearStart && y <= yearEnd);
  }, [yearStart, yearEnd]);

  const toggleMajor = useCallback((major: string) => {
    setSelectedMajors(prev => {
      const next = new Set(prev);
      if (next.has(major)) next.delete(major);
      else next.add(major);
      return next;
    });
  }, []);

  const clearMajorFilter = useCallback(() => {
    setSelectedMajors(new Set());
  }, []);

  const selectAllMajors = useCallback(() => {
    setSelectedMajors(new Set());
  }, []);

  const chartData = useMemo(() => {
    return years.map(year => {
      const row: Record<string, number | string> = { year };
      majors.forEach(major => {
        const d = data.find(r => r.year === year && r.major === major);
        if (d) {
          row[`${major}_rank`] = d.minRank;
          row[`${major}_score`] = d.minScore;
          row[`${major}_enrollment`] = d.enrollment || 0;
        }
      });
      return row;
    });
  }, [data, majors, years]);

  // 预测数据计算
  const predictionData = useMemo(() => {
    if (!showPrediction) return {} as Record<string, { value: number; r2: number }>;
    const allYears = [2021, 2022, 2023, 2024, 2025];
    const predictions: Record<string, { value: number; r2: number }> = {};
    majors.forEach(major => {
      const points = allYears
        .map(year => {
          const d = data.find(r => r.year === year && r.major === major);
          if (!d) return null;
          return { x: year, y: subView === 'rank' ? d.minRank : d.minScore };
        })
        .filter(Boolean) as { x: number; y: number }[];
      if (points.length >= 3) {
        const result = predictNextYear(points, 2026);
        predictions[major] = { value: result.predictedValue, r2: result.r2 };
      }
    });
    return predictions;
  }, [data, majors, subView, showPrediction]);

  // 包含预测年的扩展数据
  const chartDataWithPrediction = useMemo(() => {
    if (!showPrediction || Object.keys(predictionData).length === 0) return chartData;
    const predictionRow: Record<string, number | string> = { year: 2026 };
    majors.forEach(major => {
      const pred = predictionData[major];
      if (pred) {
        const key = subView === 'rank' ? `${major}_rank` : `${major}_score`;
        predictionRow[key] = pred.value;
      }
    });
    return [...chartData, predictionRow];
  }, [chartData, showPrediction, predictionData, majors, subView]);

  const changeData = useMemo(() => {
    return years.filter(y => y > yearStart).map(year => {
      const row: Record<string, number | string> = { year };
      majors.forEach(major => {
        const curr = data.find(r => r.year === year && r.major === major);
        const prev = data.find(r => r.year === year - 1 && r.major === major);
        if (curr && prev) {
          row[`${major}_change`] = curr.minRank - prev.minRank;
          row[`${major}_pct`] = Number((((prev.minRank - curr.minRank) / prev.minRank) * 100).toFixed(1));
        }
      });
      return row;
    });
  }, [data, majors, yearStart, years]);

  const compareData = useMemo(() => {
    const recentYears = years.filter(y => y >= Math.max(yearStart, yearEnd - 2));
    return majors.map(major => {
      const recentData = data.filter(d => d.major === major && recentYears.includes(d.year));
      const avgRank = recentData.length > 0
        ? Math.round(recentData.reduce((s, d) => s + d.minRank, 0) / recentData.length)
        : 0;
      const avgScore = recentData.length > 0
        ? Math.round(recentData.reduce((s, d) => s + d.minScore, 0) / recentData.length)
        : 0;

      const firstYear = years[0];
      const lastYear = years[years.length - 1];
      const rankStart = data.find(d => d.major === major && d.year === firstYear)?.minRank;
      const rankEnd = data.find(d => d.major === major && d.year === lastYear)?.minRank;
      const trend = rankStart && rankEnd ? rankStart - rankEnd : 0;

      return { major, avgRank, avgScore, trend };
    }).sort((a, b) => a.avgRank - b.avgRank);
  }, [majors, data, years, yearStart, yearEnd]);

  const enrollmentChanges = useMemo(() => {
    const changes: { year: number; major: string; from: number; to: number }[] = [];
    majors.forEach(major => {
      for (let i = 1; i < chartData.length; i++) {
        const prev = chartData[i - 1][`${major}_enrollment`] as number;
        const curr = chartData[i][`${major}_enrollment`] as number;
        if (prev && curr && Math.abs(curr - prev) >= 3) {
          changes.push({ year: chartData[i].year as number, major, from: prev, to: curr });
        }
      }
    });
    return changes;
  }, [chartData, majors]);

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  const subViews = [
    { id: 'rank' as SubView, label: '位次趋势', icon: TrendingUp },
    { id: 'score' as SubView, label: '分数趋势', icon: Activity },
    { id: 'compare' as SubView, label: '热度对比', icon: BarChart3 },
    { id: 'change' as SubView, label: '年度变化', icon: Activity },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="h-5 w-5 text-primary" />
            <button
            onClick={() => setShowUniCard(true)}
            className="hover:underline cursor-pointer text-left"
          >
            {university}
          </button>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">
            各专业录取数据多维度趋势分析 · {yearStart}–{yearEnd}年
            {category !== '全部' && ` · ${category}`}
            {selectedMajors.size > 0 && ` · 已选${selectedMajors.size}个专业`}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1 overflow-x-auto scrollbar-thin w-full md:w-auto shrink-0">
          {subViews.map(v => (
            <button
              key={v.id}
              onClick={() => setSubView(v.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                subView === v.id
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              <v.icon className="h-3 w-3" />
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-4 bg-card rounded-xl border border-border/60 p-4 shadow-card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Filter className="h-4 w-4" />
            筛选条件
            {selectedMajors.size > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {selectedMajors.size}个专业
              </span>
            )}
            {filterOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>

          {/* Quick year range presets */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground">年份范围：</span>
            {[
              { label: '近5年', start: 2021, end: 2025 },
              { label: '近3年', start: 2023, end: 2025 },
              { label: '近2年', start: 2024, end: 2025 },
            ].map(preset => (
              <button
                key={preset.label}
                onClick={() => { setYearStart(preset.start); setYearEnd(preset.end); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                  yearStart === preset.start && yearEnd === preset.end
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'bg-secondary/80 text-secondary-foreground hover:bg-accent hover:shadow-sm'
                }`}
              >
                {preset.label}
              </button>
            ))}
            <div className="flex items-center gap-1 ml-2">
              <select
                value={yearStart}
                onChange={e => setYearStart(Number(e.target.value))}
                className="h-7 rounded border border-input bg-background px-2 text-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring"
              >
                {ALL_YEARS.filter(y => y <= yearEnd).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <span className="text-xs text-muted-foreground">至</span>
              <select
                value={yearEnd}
                onChange={e => setYearEnd(Number(e.target.value))}
                className="h-7 rounded border border-input bg-background px-2 text-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring"
              >
                {ALL_YEARS.filter(y => y >= yearStart).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 预测开关 */}
          {(subView === 'rank' || subView === 'score') && (
            <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer ml-2">
              <input
                type="checkbox"
                checked={showPrediction}
                onChange={e => setShowPrediction(e.target.checked)}
                className="rounded"
              />
              显示预测
            </label>
          )}
        </div>

        {/* Expanded filter: Major selection */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            filterOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-3 border-t border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">
                选择专业（点击选择/取消，未选择则显示全部{allMajors.length}个专业）
              </span>
              <div className="flex gap-2">
                {selectedMajors.size > 0 && (
                  <button onClick={clearMajorFilter} className="text-xs text-primary hover:underline">
                    清除选择
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto scrollbar-thin">
              {allMajors.map(major => {
                const isSelected = selectedMajors.has(major);
                return (
                  <button
                    key={major}
                    onClick={() => toggleMajor(major)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                      isSelected
                        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
                        : 'bg-secondary/80 text-secondary-foreground hover:bg-accent hover:shadow-sm'
                    }`}
                  >
                    {major}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected major tags */}
        {selectedMajors.size > 0 && !filterOpen && (
          <div className="mt-2 flex flex-wrap gap-1">
            {Array.from(selectedMajors).map(major => (
              <span
                key={major}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs"
              >
                {major}
                <button onClick={() => toggleMajor(major)} className="hover:text-destructive">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ========== 位次趋势折线图 ========== */}
      {subView === 'rank' && (
        <div className="bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine">
          <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
            最低录取位次趋势 · {yearStart}-{yearEnd}年（Y轴逆序：越靠上 = 位次越靠前 = 热度越高）
          </h3>
          {chartData.length === 0 || majors.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Inbox className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">暂无数据</p>
              <p className="text-xs mt-1">请调整筛选条件或更换高校</p>
            </div>
          ) : (
          <>
            <ResponsiveContainer width="100%" height={isMobile ? 300 : 460}>
              <LineChart data={chartDataWithPrediction} margin={{ top: 10, right: isMobile ? 10 : 30, left: isMobile ? 10 : 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={{ stroke: 'hsl(var(--border))' }} />
                <YAxis
                  reversed
                  tickFormatter={formatRank}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  label={{ value: '最低录取位次', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 } }}
                  domain={['dataMin', 'dataMax']}
                />
              <Tooltip
                content={
                  <ChartTooltip
                    labelFormatter={(l) => `${l}年`}
                    valueFormatter={(value, name) => {
                      const major = majors.find(m => name === `${m}_rank`);
                      if (major) return [`位次: ${value.toLocaleString()}`, major];
                      return [String(value), name];
                    }}
                    colorMap={Object.fromEntries(majors.map((m, i) => [`${m}_rank`, COLORS[i % COLORS.length]]))}
                  />
                }
              />
              <Legend
                formatter={(value: string) => majors.find(m => value === `${m}_rank`) || value}
                onClick={(data) => {
                  const majorName = String(data.dataKey ?? '').replace('_rank', '');
                  if (majorName) {
                    setHiddenMajors(prev => {
                      const next = new Set(prev);
                      next.has(majorName) ? next.delete(majorName) : next.add(majorName);
                      return next;
                    });
                  }
                }}
                wrapperStyle={isMobile ? { cursor: 'pointer', maxHeight: '100px', overflowY: 'auto' as const } : { cursor: 'pointer' }}
              />
              {majors.map((major, idx) => (
                <Line
                  key={major}
                  type="monotone"
                  dataKey={`${major}_rank`}
                  stroke={COLORS[idx % COLORS.length]}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: COLORS[idx % COLORS.length], strokeWidth: 2, stroke: 'hsl(var(--card))' }}
                  activeDot={{ r: 6, stroke: COLORS[idx % COLORS.length], strokeWidth: 2 }}
                  connectNulls
                  animationDuration={800}
                  animationEasing="ease-out"
                  hide={hiddenMajors.has(major)}
                />
              ))}
              {showPrediction && majors.map((major, idx) => {
                const pred = predictionData[major];
                if (!pred) return null;
                const dataKey = `${major}_rank`;
                return (
                  <Line
                    key={`pred-${major}`}
                    type="monotone"
                    dataKey={dataKey}
                    stroke={COLORS[idx % COLORS.length]}
                    strokeWidth={2}
                    strokeDasharray="8 4"
                    strokeOpacity={0.5}
                    dot={{ r: 5, fill: COLORS[idx % COLORS.length], strokeWidth: 2, stroke: 'hsl(var(--card))', strokeDasharray: '0' }}
                    connectNulls
                    name={`${major} 预测`}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
          {showPrediction && (
            <p className="mt-2 text-[10px] text-muted-foreground/60 text-center">
              预测基于线性回归模型，仅供参考。实际录取受招生计划、试卷难度、报考人数等多因素影响。
            </p>
          )}
          </>
          )}
        </div>
      )}

      {/* ========== 分数趋势折线图 ========== */}
      {subView === 'score' && (
        <div className="bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine">
          <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
            最低录取分数趋势 · {yearStart}-{yearEnd}年（分数越高 = 竞争越激烈）
          </h3>
          {chartData.length === 0 || majors.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Inbox className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">暂无数据</p>
              <p className="text-xs mt-1">请调整筛选条件或更换高校</p>
            </div>
          ) : (
          <>
            <ResponsiveContainer width="100%" height={isMobile ? 300 : 460}>
              <LineChart data={chartDataWithPrediction} margin={{ top: 10, right: isMobile ? 10 : 30, left: isMobile ? 10 : 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={{ stroke: 'hsl(var(--border))' }} />
                <YAxis
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  label={{ value: '最低录取分数', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 } }}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
              <Tooltip
                content={
                  <ChartTooltip
                    labelFormatter={(l) => `${l}年`}
                    valueFormatter={(value, name) => {
                      const major = majors.find(m => name === `${m}_score`);
                      if (major) return [`分数: ${value}`, major];
                      return [String(value), name];
                    }}
                    colorMap={Object.fromEntries(majors.map((m, i) => [`${m}_score`, COLORS[i % COLORS.length]]))}
                  />
                }
              />
              <Legend
                formatter={(value: string) => majors.find(m => value === `${m}_score`) || value}
                onClick={(data) => {
                  const majorName = String(data.dataKey ?? '').replace('_score', '');
                  if (majorName) {
                    setHiddenMajors(prev => {
                      const next = new Set(prev);
                      next.has(majorName) ? next.delete(majorName) : next.add(majorName);
                      return next;
                    });
                  }
                }}
                wrapperStyle={isMobile ? { cursor: 'pointer', maxHeight: '100px', overflowY: 'auto' as const } : { cursor: 'pointer' }}
              />
              {majors.map((major, idx) => (
                <Line
                  key={major}
                  type="monotone"
                  dataKey={`${major}_score`}
                  stroke={COLORS[idx % COLORS.length]}
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: COLORS[idx % COLORS.length], strokeWidth: 2, stroke: 'hsl(var(--card))' }}
                  activeDot={{ r: 6, stroke: COLORS[idx % COLORS.length], strokeWidth: 2 }}
                  connectNulls
                  animationDuration={800}
                  animationEasing="ease-out"
                  hide={hiddenMajors.has(major)}
                />
              ))}
              {showPrediction && majors.map((major, idx) => {
                const pred = predictionData[major];
                if (!pred) return null;
                const dataKey = `${major}_score`;
                return (
                  <Line
                    key={`pred-${major}`}
                    type="monotone"
                    dataKey={dataKey}
                    stroke={COLORS[idx % COLORS.length]}
                    strokeWidth={2}
                    strokeDasharray="8 4"
                    strokeOpacity={0.5}
                    dot={{ r: 5, fill: COLORS[idx % COLORS.length], strokeWidth: 2, stroke: 'hsl(var(--card))', strokeDasharray: '0' }}
                    connectNulls
                    name={`${major} 预测`}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
          {showPrediction && (
            <p className="mt-2 text-[10px] text-muted-foreground/60 text-center">
              预测基于线性回归模型，仅供参考。实际录取受招生计划、试卷难度、报考人数等多因素影响。
            </p>
          )}
          </>
          )}
        </div>
      )}

      {/* ========== 专业热度对比（柱状图）========== */}
      {subView === 'compare' && (
        <>
          <div className="bg-card rounded-xl border border-border/60 p-6 shadow-card card-shine mb-4">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground">
              专业热度对比：{yearStart}-{yearEnd}年平均最低录取位次排名
            </h3>
            <ResponsiveContainer width="100%" height={Math.max(majors.length * 50, 250)}>
              <BarChart data={compareData} layout="vertical" margin={{ top: 10, right: 20, left: isMobile ? 100 : 200, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis
                  type="number"
                  tickFormatter={formatRank}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  label={{ value: '平均最低位次（越小越热门）', position: 'insideBottom', offset: -5, style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 } }}
                />
                <YAxis
                  type="category"
                  dataKey="major"
                  width={isMobile ? 95 : 195}
                  tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                  formatter={(value: number, _name: string, props: any) => {
                    const p = props?.payload || {};
                    return [
                    <div key="t" className="text-xs space-y-1">
                      <div>平均位次: <strong>{value.toLocaleString()}</strong></div>
                      <div>平均分: <strong>{p.avgScore || '-'}</strong></div>
                      <div>位次变化: <strong className={p.trend > 0 ? 'text-red-400' : p.trend < 0 ? 'text-green-400' : ''}>{p.trend > 0 ? `↑${p.trend}` : p.trend < 0 ? `↓${Math.abs(p.trend)}` : '→稳定'}</strong></div>
                    </div>,
                    p.major || '',
                  ];}}
                />
                <Bar dataKey="avgRank" radius={[0, 6, 6, 0]} barSize={22}>
                  {compareData.map((entry, idx) => {
                    const rank = entry.avgRank;
                    let color = COLORS[0];
                    if (rank <= 500) color = 'hsl(340, 75%, 60%)';
                    else if (rank <= 2000) color = 'hsl(280, 65%, 65%)';
                    else if (rank <= 5000) color = 'hsl(217, 80%, 58%)';
                    else if (rank <= 10000) color = 'hsl(190, 70%, 50%)';
                    else if (rank <= 20000) color = 'hsl(160, 60%, 50%)';
                    else color = 'hsl(100, 55%, 55%)';
                    return <Cell key={idx} fill={color} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 趋势指标卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {compareData.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border shadow-card card-shine hover:shadow-card-hover transition-all duration-300 cursor-default ${
                  item.trend > 100
                    ? 'bg-gradient-to-br from-red-500/8 to-orange-500/5 border-red-500/15'
                    : item.trend < -100
                    ? 'bg-gradient-to-br from-blue-500/8 to-cyan-500/5 border-blue-500/15'
                    : 'bg-card border-border/60'
                }`}
              >
                <div className="text-xs font-medium text-muted-foreground mb-1.5 truncate" title={item.major}>{item.major}</div>
                <div className="text-lg font-bold">{formatRank(item.avgRank)}</div>
                <div className="flex items-center gap-1 mt-1.5">
                  {item.trend > 100 ? (
                    <span className="text-xs text-red-400 font-semibold flex items-center gap-0.5">
                      <TrendingUp className="h-3 w-3" /> 升温 (+{item.trend})
                    </span>
                  ) : item.trend < -100 ? (
                    <span className="text-xs text-blue-400 font-semibold flex items-center gap-0.5">
                      <Activity className="h-3 w-3" /> 降温 ({item.trend})
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                      <Activity className="h-3 w-3" /> 稳定
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ========== 年度变化曲线 ========== */}
      {subView === 'change' && (
        <div className="bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine">
          <h3 className="text-sm font-semibold mb-2 text-muted-foreground">
            年度位次变化量 · {yearStart}-{yearEnd}年
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            正数=位次下降/降温，负数=位次上升/升温
          </p>
          <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
            <BarChart data={changeData} margin={{ top: 10, right: isMobile ? 10 : 30, left: isMobile ? 10 : 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={{ stroke: 'hsl(var(--border))' }} />
              <YAxis
                tickFormatter={(v: number) => v >= 0 ? `+${formatRank(v)}` : formatRank(v)}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
                label={{ value: '位次变化量', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 } }}
              />
              <Tooltip
                content={
                  <ChartTooltip
                    labelFormatter={(l) => `${l}年 vs 上年`}
                    valueFormatter={(value, name) => {
                      const major = majors.find(m => name === `${m}_change`);
                      if (major) {
                        const direction = value > 0 ? '位次下降（降温）' : '位次上升（升温）';
                        return [`${direction}: ${Math.abs(value).toLocaleString()}`, major];
                      }
                      return [String(value), name];
                    }}
                    colorMap={Object.fromEntries(majors.map((m, i) => [`${m}_change`, COLORS[i % COLORS.length]]))}
                  />
                }
              />
              <Legend
                formatter={(value: string) => majors.find(m => value === `${m}_change`) || value}
                onClick={(data) => {
                  const majorName = String(data.dataKey ?? '').replace('_change', '');
                  if (majorName) {
                    setHiddenMajors(prev => {
                      const next = new Set(prev);
                      next.has(majorName) ? next.delete(majorName) : next.add(majorName);
                      return next;
                    });
                  }
                }}
                wrapperStyle={isMobile ? { cursor: 'pointer', maxHeight: '100px', overflowY: 'auto' as const } : { cursor: 'pointer' }}
              />
              {majors.map((major, idx) => (
                <Bar key={major} dataKey={`${major}_change`} fill={COLORS[idx % COLORS.length]} radius={[4, 4, 0, 0]} barSize={majors.length > 5 ? 8 : 16} />
              ))}
            </BarChart>
          </ResponsiveContainer>

          {/* 变化明细表格 */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left p-2.5 font-semibold text-muted-foreground border-b border-border">专业</th>
                  {years.filter(y => y > yearStart).map(y => (
                    <th key={y} className="text-center p-2.5 font-semibold text-muted-foreground border-b border-border">
                      {y-1}→{y}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {majors.map((major, mi) => {
                  const changes = years.filter(y => y > yearStart).map(year => {
                    const curr = data.find(r => r.year === year && r.major === major);
                    const prev = data.find(r => r.year === year - 1 && r.major === major);
                    if (curr && prev) return curr.minRank - prev.minRank;
                    return null;
                  });
                  return (
                    <tr key={major} className="border-b border-border hover:bg-secondary/30">
                      <td className="p-2.5 font-medium">
                        <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: COLORS[mi % COLORS.length] }} />
                        {major}
                      </td>
                      {changes.map((change, yi) => (
                        <td key={yi} className="text-center p-2.5">
                          {change === null ? (
                            <span className="text-muted-foreground">-</span>
                          ) : (
                            <span className={`font-mono text-xs font-semibold ${
                              change > 0 ? 'text-red-400' : change < 0 ? 'text-emerald-400' : 'text-muted-foreground'
                            }`}>
                              {change > 0 ? '+' : ''}{change.toLocaleString()}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 招生人数突变提醒 */}
      {enrollmentChanges.length > 0 && (
        <div className="mt-4 p-4 rounded-xl bg-card border border-border/60 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-chart-3" />
            <h3 className="text-sm font-semibold">招生人数突变提醒</h3>
          </div>
          <div className="space-y-2">
            {enrollmentChanges.map((c, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-destructive" />
                <span>
                  <strong>{c.major}</strong> 在 <strong>{c.year}年</strong> 招生计划由 {c.from} 人
                  变为 <strong className={c.to > c.from ? 'text-chart-2' : 'text-destructive'}>{c.to} 人</strong>
                  （{c.to > c.from ? '扩招' : '缩招'} {Math.abs(c.to - c.from)} 人）
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 图例 */}
      <div className="mt-4 text-xs text-muted-foreground flex items-center gap-4 flex-wrap">
        <span>位次越小 = 排名越靠前 = 热度越高</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-2 h-2 rounded-full bg-emerald-400" /> 位次上升（升温）</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-2 h-2 rounded-full bg-red-400" /> 位次下降（降温）</span>
      </div>

      {/* UniversityCard Modal */}
      {showUniCard && (
        <UniversityCard university={university} onClose={() => setShowUniCard(false)} />
      )}
    </div>
  );
}
