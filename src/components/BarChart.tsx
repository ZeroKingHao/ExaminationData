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
import { admissionData } from '../data/admissionData';
import { BarChart3, Search, X, Award, Star, Filter } from 'lucide-react';
import { ChartTooltip } from './ChartTooltip';

interface BarChartComponentProps {
  year: number;
  category: string;
}

export default function BarChartComponent({ year, category }: BarChartComponentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState<'10' | '20' | 'all'>('all');

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
      } else if (existing) {
        existing.majors = [...new Set([...existing.majors, d.major])];
      }
    });

    return Array.from(uniMap.values())
      .sort((a, b) => a.minRank - b.minRank)
      .map(d => ({
        ...d,
        label: `${d.university} ${d.tier === '985' ? '🌟' : '📌'}`,
        majorCount: d.majors.length,
      }));
  }, [year, category]);

  // Apply search and count filters
  const chartData = useMemo(() => {
    let data = allChartData;
    if (searchQuery.trim()) {
      data = data.filter(d => d.university.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (displayCount !== 'all') {
      data = data.slice(0, parseInt(displayCount));
    }
    return data;
  }, [allChartData, searchQuery, displayCount]);

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
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">{year}年 专业热度排名</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          横向柱状图：按各高校最低录取位次排序，位次越小热度越高
          {category !== '全部' && ` · 已筛选：${category}`}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          热度指标：当年最低录取位次（位次数字越小 = 越难考 = 热度越高）
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-4 flex flex-wrap items-center gap-3 bg-card rounded-xl border border-border/60 p-4 shadow-card">
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="搜索高校名称..."
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
        <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1">
          {[
            { id: '10' as const, label: '前10' },
            { id: '20' as const, label: '前20' },
            { id: 'all' as const, label: '全部' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => setDisplayCount(opt.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
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

      <div className="bg-card rounded-xl border border-border/60 p-6 shadow-card card-shine">
        {chartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
            <BarChart3 className="h-10 w-10 mb-3 opacity-30" />
            <p className="text-sm">未找到匹配的高校</p>
            <p className="text-xs mt-1">请调整搜索关键词或筛选条件</p>
          </div>
        ) : (
        <ResponsiveContainer width="100%" height={Math.max(chartData.length * 40, 400)}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 10, right: 60, left: 160, bottom: 20 }}
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
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
            <XAxis
              type="number"
              tickFormatter={formatRank}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              label={{
                value: '最低录取位次',
                position: 'insideBottom',
                offset: -5,
                style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 },
              }}
            />
            <YAxis
              type="category"
              dataKey="label"
              width={155}
              tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <Tooltip
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
            <Bar dataKey="minRank" radius={[0, 6, 6, 0]} barSize={24} animationDuration={800} animationEasing="ease-out">
              {chartData.map((entry, index) => (
                <Cell key={index} fill={getBarColor(entry.minRank, index)} />
              ))}
              <LabelList dataKey="minRank" position="insideRight" formatter={(v: number) => formatRank(v)} style={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        )}
      </div>

      {/* Color Legend - Gradient Bar */}
      <div className="mt-4 p-4 rounded-xl bg-card border border-border/60 shadow-card card-shine">
        <h3 className="text-xs font-semibold text-muted-foreground mb-3">热度色阶说明</h3>
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
