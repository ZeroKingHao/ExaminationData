import { useMemo, useState } from 'react';
import { admissionData } from '../data/admissionData';
import { BarChart3, Table2 } from 'lucide-react';

interface HeatmapChartProps {
  university: string;
  category: string;
}

type HeatMode = 'rank' | 'score';

export default function HeatmapChart({ university, category }: HeatmapChartProps) {
  const years = [2021, 2022, 2023, 2024, 2025];
  const [heatMode, setHeatMode] = useState<HeatMode>('rank');

  const heatmapData = useMemo(() => {
    let filtered = admissionData.filter(d => d.university === university);
    if (category !== '全部') {
      filtered = filtered.filter(d => d.category === category);
    }

    const majorSet = new Set(filtered.map(d => d.major));
    const majors = Array.from(majorSet).sort();

    const allRanks = filtered.map(d => d.minRank);
    const allScores = filtered.map(d => d.minScore);
    const minRank = Math.min(...allRanks);
    const maxRank = Math.max(...allRanks);
    const minScore = Math.min(...allScores);
    const maxScore = Math.max(...allScores);

    return { majors, filtered, minRank, maxRank, minScore, maxScore };
  }, [university, category]);

  const getRankColor = (rank: number) => {
    const { minRank, maxRank } = heatmapData;
    const normalized = 1 - (rank - minRank) / (maxRank - minRank + 1);
    if (normalized > 0.85) return { bg: 'rgba(239, 68, 68, 0.85)', text: '#fff' };
    if (normalized > 0.7) return { bg: 'rgba(249, 115, 22, 0.75)', text: '#fff' };
    if (normalized > 0.55) return { bg: 'rgba(245, 158, 11, 0.65)', text: '#1a1a1a' };
    if (normalized > 0.4) return { bg: 'rgba(132, 204, 22, 0.55)', text: '#1a1a1a' };
    if (normalized > 0.25) return { bg: 'rgba(34, 197, 94, 0.55)', text: '#fff' };
    return { bg: 'rgba(6, 182, 212, 0.45)', text: '#fff' };
  };

  const getScoreColor = (score: number) => {
    const { minScore, maxScore } = heatmapData;
    const normalized = (score - minScore) / (maxScore - minScore + 1);
    if (normalized > 0.85) return { bg: 'rgba(239, 68, 68, 0.85)', text: '#fff' };
    if (normalized > 0.7) return { bg: 'rgba(249, 115, 22, 0.75)', text: '#fff' };
    if (normalized > 0.55) return { bg: 'rgba(245, 158, 11, 0.65)', text: '#1a1a1a' };
    if (normalized > 0.4) return { bg: 'rgba(132, 204, 22, 0.55)', text: '#1a1a1a' };
    if (normalized > 0.25) return { bg: 'rgba(34, 197, 94, 0.55)', text: '#fff' };
    return { bg: 'rgba(6, 182, 212, 0.45)', text: '#fff' };
  };

  const getCellData = (major: string, year: number) => {
    return heatmapData.filtered.find(r => r.major === major && r.year === year) || null;
  };

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">{university} · 专业热度迁移</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            热力图：颜色越暖表示{heatMode === 'rank' ? '位次越靠前（热度越高）' : '分数越高（竞争越激烈）'}
            {category !== '全部' && ` · 已筛选：${category}`}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
          <button
            onClick={() => setHeatMode('rank')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
              heatMode === 'rank' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent'
            }`}
          >
            <Table2 className="h-3 w-3" />
            位次视图
          </button>
          <button
            onClick={() => setHeatMode('score')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
              heatMode === 'score' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent'
            }`}
          >
            <Table2 className="h-3 w-3" />
            分数视图
          </button>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 shadow-sm overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[200px]">
                专业名称
              </th>
              {years.map(y => (
                <th key={y} className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[110px]">
                  {y}年
                </th>
              ))}
              <th className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[110px]">
                5年趋势
              </th>
              <th className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[80px]">
                招生
              </th>
            </tr>
          </thead>
          <tbody>
            {heatmapData.majors.map(major => {
              const cells = years.map(y => getCellData(major, y));
              const validRanks = cells.filter((c): c is NonNullable<typeof c> => c !== null).map(c => c.minRank);

              // 趋势：首位次差
              const trend = validRanks.length >= 2
                ? validRanks[validRanks.length - 1] - validRanks[0]
                : 0;

              // 最近招生人数
              const latestEnrollment = cells.filter((c): c is NonNullable<typeof c> => c !== null).pop()?.enrollment;

              return (
                <tr key={major} className="hover:bg-secondary/30 transition-colors">
                  <td className="text-sm font-medium p-3 border-b border-border">
                    {major}
                  </td>
                  {years.map((y, yi) => {
                    const cell = cells[yi];
                    if (!cell) {
                      return (
                        <td key={y} className="text-center p-2 border-b border-border">
                          <span className="text-xs text-muted-foreground">-</span>
                        </td>
                      );
                    }
                    const color = heatMode === 'rank' ? getRankColor(cell.minRank) : getScoreColor(cell.minScore);
                    const mainValue = heatMode === 'rank' ? formatRank(cell.minRank) : cell.minScore;
                    const subValue = heatMode === 'rank' ? cell.minScore : formatRank(cell.minRank);

                    return (
                      <td key={y} className="text-center p-2 border-b border-border">
                        <div
                          className="inline-flex flex-col items-center justify-center rounded-lg p-2 min-w-[90px] transition-all duration-200 hover:scale-105"
                          style={{ backgroundColor: color.bg, color: color.text }}
                        >
                          <span className="text-xs font-bold">{mainValue}</span>
                          <span className="text-[10px] opacity-75">{subValue}{heatMode === 'rank' ? '分' : '位'}</span>
                        </div>
                      </td>
                    );
                  })}
                  <td className="text-center p-3 border-b border-border">
                    <div className="flex items-center justify-center gap-1">
                      {trend < -500 ? (
                        <span className="text-xs font-semibold text-red-400">🔥 强势升温</span>
                      ) : trend < -100 ? (
                        <span className="text-xs font-semibold text-orange-400">↑ 升温</span>
                      ) : trend > 500 ? (
                        <span className="text-xs font-semibold text-blue-400">❄ 明显降温</span>
                      ) : trend > 100 ? (
                        <span className="text-xs font-semibold text-cyan-400">↓ 降温</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">→ 稳定</span>
                      )}
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">
                      {trend > 0 ? '+' : ''}{formatRank(trend)}位
                    </div>
                  </td>
                  <td className="text-center p-3 border-b border-border">
                    <span className="text-xs font-mono">{latestEnrollment || '-'}人</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Color Scale Legend */}
      <div className="mt-4 p-4 rounded-xl bg-card border border-border">
        <h3 className="text-xs font-semibold text-muted-foreground mb-3">
          {heatMode === 'rank' ? '位次热度色阶（位次越小颜色越暖）' : '分数热度色阶（分数越高颜色越暖）'}
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground mr-2">
            {heatMode === 'rank' ? '高位次（冷）' : '低分数（冷）'}
          </span>
          <div className="flex gap-0.5">
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(6, 182, 212, 0.45)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(34, 197, 94, 0.55)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(132, 204, 22, 0.55)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(245, 158, 11, 0.65)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(249, 115, 22, 0.75)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(239, 68, 68, 0.85)' }} />
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            {heatMode === 'rank' ? '低位次（热）' : '高分数（热）'}
          </span>
        </div>
      </div>
    </div>
  );
}
