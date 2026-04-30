import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { admissionData } from '../data/admissionData';
import { BarChart3 } from 'lucide-react';

interface BarChartComponentProps {
  year: number;
  category: string;
}

export default function BarChartComponent({ year, category }: BarChartComponentProps) {
  const chartData = useMemo(() => {
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

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  const getBarColor = (rank: number) => {
    if (rank <= 100) return 'hsl(340, 75%, 60%)';
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

      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <ResponsiveContainer width="100%" height={Math.max(chartData.length * 40, 400)}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 10, right: 40, left: 160, bottom: 20 }}
          >
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
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
              formatter={(value: number, _name: string, props: any) => {
                const p = props?.payload || {};
                return [
                <div key="tooltip" className="text-xs space-y-1">
                  <div>最低位次: <strong>{value.toLocaleString()}</strong></div>
                  <div>最低分数: <strong>{p.minScore || '-'}</strong></div>
                  <div>层次: {p.tier || '-'}</div>
                  <div>涉及专业: {p.majorCount || '-'} 个</div>
                </div>,
                p.university || '',
              ];}}
            />
            <Bar dataKey="minRank" radius={[0, 6, 6, 0]} barSize={24}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={getBarColor(entry.minRank)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Color Legend */}
      <div className="mt-4 p-4 rounded-xl bg-card border border-border">
        <h3 className="text-xs font-semibold text-muted-foreground mb-2">热度色阶说明</h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(340, 75%, 60%)' }} />
            极高（位次 ≤100）
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(280, 65%, 65%)' }} />
            极高（位次 ≤500）
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(217, 80%, 58%)' }} />
            高（位次 ≤2000）
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(190, 70%, 50%)' }} />
            中高（位次 ≤5000）
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(160, 60%, 50%)' }} />
            中（位次 ≤10000）
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(100, 55%, 55%)' }} />
            较低（位次 ≤20000）
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'hsl(45, 90%, 58%)' }} />
            低（位次 &gt;20000）
          </span>
        </div>
      </div>
    </div>
  );
}
