import { useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { admissionData, hasAdmissionData } from '../data/admissionData';
import { BarChart3, Search, X, Award, Star, Filter } from 'lucide-react';
import { ChartTooltip } from './ChartTooltip';
import { useIsMobile } from '../hooks/useIsMobile';

interface BarChartComponentProps {
  year: number;
  category: string;
}

export default function BarChartComponent({ year, category }: BarChartComponentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState<'10' | '20' | 'all'>('all');
  const isMobile = useIsMobile();

  // 移动端默认显示前10
  const effectiveDisplayCount = isMobile && displayCount === 'all' ? '10' : displayCount;

  const allChartData = useMemo(() => {
    let filtered = admissionData.filter(d => d.year === year);
    if (category !== '全部') {
      filtered = filtered.filter(d => d.category === category);
    }

    // Aggregate: take the lowest rank for each university
    const uniMap = new Map<string, { university: string; minRank: number; minScore: number; tier: string; majors: string[] }>();
    filtered.forEach(d => {
      const existing = uniMap.get(d.university);
      if (!existing || d.minRank < existing.minRank) {
        uniMap.set(d.university, {
          university: d.university,
          minRank: d.minRank,
          minScore: d.minScore,
          tier: d.tier,
          majors: existing ? [...existing.majors, d.major] : [d.major],
        });
      } else {
        existing.majors = [...new Set([...existing.majors, d.major])];
      }
    });

    return Array.from(uniMap.values())
      .sort((a, b) => a.minRank - b.minRank)
      .map(d => ({
        ...d,
        label: `${d.university} ${d.tier === '985' ? '🌟' : '📌'}`,
        shortLabel: d.university.length > 7 ? d.university.slice(0, 6) + '…' : d.university,
        majorCount: d.majors.length,
      }));
  }, [year, category]);

  // Apply search and count filters
  const chartData = useMemo(() => {
    let data = allChartData;
    if (searchQuery.trim()) {
      data = data.filter(d => d.university.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (effectiveDisplayCount !== 'all') {
      data = data.slice(0, parseInt(effectiveDisplayCount));
    }
    return data;
  }, [allChartData, searchQuery, effectiveDisplayCount]);

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  const getBarColor = (rank: number, index: number) => {
    if (index === 0) return 'url(#goldGradient)';
    if (index === 1) return 'url(#silverGradient)';
    if (index === 2) return 'url(#bronzeGradient)';
    if (rank <= 500) return 'hsl(280, 65%, 65%)';
    if (rank <= 2000) return 'hsl(217, 80%, 58%)';
    if (rank <= 5000) return 'hsl(190, 70%, 50%)';
    if (rank <= 10000) return 'hsl(160, 60%, 50%)';
    if (rank <= 20000) return 'hsl(100, 55%, 55%)';
    return 'hsl(45, 90%, 58%)';
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center gap-2 mb-1 sm:mb-2">
          <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <h2 className="text-lg sm:text-2xl font-serif-cn font-bold ink-text">{year}年 专业热度排名</h2>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground tracking-wide">
          按最低录取位次排序，位次越小热度越高
          {category !== '全部' && ` · 已筛选：${category}`}
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3 bg-card rounded-xl border border-border/60 p-3 sm:p-4 shadow-card">
        <div className="relative flex-1 min-w-0 md:min-w-[200px] md:flex-initial md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="搜索高校名称..."
            className="w-full h-8 sm:h-9 rounded-lg border border-input bg-background pl-9 pr-8 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
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
        <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1">
          {[
            { id: '10' as const, label: '前10' },
            { id: '20' as const, label: '前20' },
            { id: 'all' as const, label: '全部' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setDisplayCount(opt.id)}
              className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
                displayCount === opt.id
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          显示 {chartData.length} / {allChartData.length} 所高校
        </span>
      </div>

      <div className={`bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card ${isMobile ? '' : 'card-shine'}`}>
        {chartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <BarChart3 className="h-10 w-10 mb-3 opacity-30" />
            <p className="text-sm">{hasAdmissionData(year) ? '未找到匹配的高校' : `${year}年录取数据待发布`}</p>
            <p className="text-xs mt-1">{hasAdmissionData(year) ? '请调整搜索关键词或筛选条件' : '预计 7 月公布，敬请期待'}</p>
          </div>
        ) : (
        <ResponsiveContainer width="100%" height={Math.max(chartData.length * (isMobile ? 32 : 40), 300)}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={isMobile
              ? { top: 5, right: 40, left: 0, bottom: 5 }
              : { top: 10, right: 60, left: 160, bottom: 20 }
            }
          >
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="silverGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c0c0c0" />
                <stop offset="100%" stopColor="#909090" />
              </linearGradient>
              <linearGradient id="bronzeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b85c05" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} vertical />
            <XAxis
              type="number"
              tickFormatter={formatRank}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: isMobile ? 9 : 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              {...(!isMobile && {
                label: {
                  value: '最低录取位次',
                  position: 'insideBottom' as const,
                  offset: -5,
                  style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 },
                },
              })}
            />
            <YAxis
              type="category"
              dataKey={isMobile ? 'shortLabel' : 'label'}
              width={isMobile ? 88 : 155}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: isMobile ? 9 : 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <Tooltip
              position={isMobile ? { x: 10, y: 0 } : undefined}
              content={
                <ChartTooltip
                  valueFormatter={(value, _name, props) => {
                    const p = props || {};
                    return [
                      `最低位次: ${value.toLocaleString()} | 最低分: ${p.minScore || '-'} | ${p.tier || ''}`,
                      String(p.university || ''),
                    ];
                  }}
                />
              }
            />
            <Bar
              dataKey="minRank"
              radius={isMobile ? [0, 4, 4, 0] : [0, 6, 6, 0]}
              barSize={isMobile ? 14 : 24}
              animationDuration={800}
              animationEasing="ease-out"
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={getBarColor(entry.minRank, index)} />
              ))}
              <LabelList
                dataKey="minRank"
                position="right"
                content={({ x, y, width, height, value }) => {
                  const num = Number(value);
                  const text = isNaN(num) || value == null ? '--' : formatRank(num);
                  return (
                    <text
                      x={Number(x || 0) + Number(width || 0) + 8}
                      y={Number(y || 0) + Number(height || 0) / 2}
                      textAnchor="start"
                      dominantBaseline="central"
                      fill="hsl(var(--muted-foreground))"
                      fontSize={isMobile ? 8 : 10}
                    >
                      {text}
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        )}
      </div>

      {/* Color Legend */}
      <div className="mt-4 p-3 sm:p-4 rounded-xl bg-card border border-border/60 shadow-card card-shine">
        <h3 className="text-[10px] sm:text-xs font-semibold text-muted-foreground mb-2 sm:mb-3">热度色阶</h3>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground whitespace-nowrap">热</span>
          <div
            className="flex-1 h-3 rounded-full"
            style={{
              background: 'linear-gradient(to right, hsl(340, 75%, 60%), hsl(280, 65%, 65%), hsl(217, 80%, 58%), hsl(190, 70%, 50%), hsl(160, 60%, 50%), hsl(100, 55%, 55%), hsl(45, 90%, 58%))'
            }}
          />
          <span className="text-xs text-muted-foreground whitespace-nowrap">冷</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[10px] text-muted-foreground">
          <span>极热 (≤100)</span>
          <span>极高 (≤500)</span>
          <span>高 (≤2000)</span>
          <span>中高 (≤5k)</span>
          <span>中 (≤10k)</span>
          <span>较低 (≤20k)</span>
          <span>低 (&gt;20k)</span>
        </div>
      </div>
    </div>
  );
}
