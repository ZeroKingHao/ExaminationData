import { useMemo, useState } from 'react';
import { admissionData } from '../data/admissionData';
import { BarChart3, Table2, Search, X } from 'lucide-react';
import UniversityCard from './UniversityCard';

// Simple sparkline component using SVG
function MiniSparkline({ data, years, width = 60, height = 20 }: { data: number[]; years?: number[]; width?: number; height?: number }) {
  if (data.length < 2) return <span className="text-xs text-muted-foreground">-</span>;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  }).join(' ');

  const titleText = years
    ? data.map((v, i) => `${years[i] ?? '?'}: ${v.toLocaleString()}`).join('\n')
    : '';

  return (
    <svg width={width} height={height} className="inline-block">
      {titleText && <title>{titleText}</title>}
      <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5} points={points} />
    </svg>
  );
}

interface HeatmapChartProps {
  university: string;
  category: string;
}

type HeatMode = 'rank' | 'score';

export default function HeatmapChart({ university, category }: HeatmapChartProps) {
  const years = [2021, 2022, 2023, 2024, 2025];
  const [heatMode, setHeatMode] = useState<HeatMode>('rank');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCell, setHoveredCell] = useState<{ major: string; year: number } | null>(null);
  const [showUniCard, setShowUniCard] = useState(false);

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

  // Filter majors by search query
  const displayMajors = useMemo(() => {
    if (!searchQuery.trim()) return heatmapData.majors;
    return heatmapData.majors.filter(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [heatmapData.majors, searchQuery]);

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
            <h2 className="text-2xl font-serif-cn font-bold ink-text"><button onClick={() => setShowUniCard(true)} className="hover:underline cursor-pointer">{university}</button> · 专业热度迁移</h2>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">
            热力图：颜色越暖表示{heatMode === 'rank' ? '位次越靠前（热度越高）' : '分数越高（竞争越激烈）'}
            {category !== '全部' && ` · 已筛选：${category}`}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1">
          <button
            onClick={() => setHeatMode('rank')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              heatMode === 'rank' ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' : 'text-muted-foreground hover:bg-accent/50'
            }`}
          >
            <Table2 className="h-3 w-3" />
            位次视图
          </button>
          <button
            onClick={() => setHeatMode('score')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
              heatMode === 'score' ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' : 'text-muted-foreground hover:bg-accent/50'
            }`}
          >
            <Table2 className="h-3 w-3" />
            分数视图
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="搜索专业名称..."
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
        <span className="text-xs text-muted-foreground">
          显示 {displayMajors.length} / {heatmapData.majors.length} 个专业
        </span>
      </div>

      <div className="bg-card rounded-xl border border-border/60 p-6 shadow-card card-shine overflow-x-auto">
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
              <th className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[80px]">
                5年趋势
              </th>
              <th className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[80px]">
                招生
              </th>
            </tr>
          </thead>
          <tbody>
            {displayMajors.map(major => {
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
                          <span className="inline-flex items-center justify-center w-[90px] h-[42px] rounded-lg border-2 border-dashed border-border/60 text-xs text-muted-foreground/40">
                            -
                          </span>
                        </td>
                      );
                    }
                    const color = heatMode === 'rank' ? getRankColor(cell.minRank) : getScoreColor(cell.minScore);
                    const mainValue = heatMode === 'rank' ? formatRank(cell.minRank) : cell.minScore;
                    const subValue = heatMode === 'rank' ? cell.minScore : formatRank(cell.minRank);

                    return (
                      <td key={y} className="text-center p-2 border-b border-border">
                        <div
                          className={`inline-flex flex-col items-center justify-center rounded-lg p-2 min-w-[90px] transition-all duration-200 cursor-default ${
                            hoveredCell?.major === major && hoveredCell?.year === y ? 'scale-105 shadow-lg z-10 relative ring-1 ring-border' : 'hover:scale-[1.02]'
                          }`}
                          style={{ backgroundColor: color.bg, color: color.text }}
                          onMouseEnter={() => setHoveredCell({ major, year: y })}
                          onMouseLeave={() => setHoveredCell(null)}
                        >
                          <span className="text-xs font-bold">{mainValue}</span>
                          <span className="text-[10px] opacity-75">{subValue}{heatMode === 'rank' ? '分' : '位'}</span>
                        </div>
                      </td>
                    );
                  })}
                  <td className="text-center p-3 border-b border-border">
                    <MiniSparkline data={validRanks} years={years} />
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
      <div className="mt-4 p-4 rounded-xl bg-card border border-border/60 shadow-card card-shine">
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
      {showUniCard && <UniversityCard university={university} onClose={() => setShowUniCard(false)} />}
    </div>
  );
}
