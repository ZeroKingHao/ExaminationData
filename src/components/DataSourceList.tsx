import { DATA_SOURCES, admissionData } from '../data/admissionData';
import { detailedScoreRankTable, getRankByScore, getScoreByRank, getBachelorLine, SCORE_RANK_SOURCES, type ScoreRankEntry } from '../data/scoreRankData';
import { BookOpen, ExternalLink, Table2, Search, ArrowRight, TrendingUp, Award, Target, Shield, Zap, ShieldCheck, ChevronDown as ChevronDownIcon } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

type QueryMode = 'score' | 'rank' | 'browse';

export default function DataSourceList() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);
  const [queryMode, setQueryMode] = useState<QueryMode>('score');
  const [queryYear, setQueryYear] = useState(2025);
  const [queryScore, setQueryScore] = useState<string>('620');
  const [queryRank, setQueryRank] = useState<string>('10000');
  const [browseYear, setBrowseYear] = useState(2025);
  const [browseScoreRange, setBrowseScoreRange] = useState<[number, number]>([550, 700]);
  const [expandedMatched, setExpandedMatched] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // 分数查询结果
  const scoreQueryResult = useMemo(() => {
    const score = parseInt(queryScore);
    if (isNaN(score) || score < 200 || score > 750) return null;
    const rank = getRankByScore(queryYear, score);
    if (!rank) return null;
    const bachelorLine = getBachelorLine(queryYear);
    const isAboveLine = bachelorLine ? score >= bachelorLine.score : true;
    const diff = bachelorLine ? score - bachelorLine.score : 0;
    return { score, rank, isAboveLine, diff, bachelorLine };
  }, [queryScore, queryYear]);

  // 位次查询结果
  const rankQueryResult = useMemo(() => {
    const rank = parseInt(queryRank);
    if (isNaN(rank) || rank < 1) return null;
    const score = getScoreByRank(queryYear, rank);
    if (!score) return null;
    const bachelorLine = getBachelorLine(queryYear);
    return { rank, score, bachelorLine };
  }, [queryRank, queryYear]);

  // 浏览模式：筛选后的数据
  const browsedData = useMemo(() => {
    const table = detailedScoreRankTable[browseYear];
    if (!table) return [];
    return table.filter(e => e.score >= browseScoreRange[0] && e.score <= browseScoreRange[1]);
  }, [browseYear, browseScoreRange]);

  // 快速查询：哪些985/211学校在此分数/位次附近
  const matchedUniversities = useMemo(() => {
    let targetRank: number | null = null;
    if (queryMode === 'score' && scoreQueryResult) {
      targetRank = scoreQueryResult.rank;
    } else if (queryMode === 'rank' && rankQueryResult) {
      targetRank = rankQueryResult.rank;
    }
    if (!targetRank) return [];

    const yearData = admissionData.filter(d => d.year === queryYear);
    // 找位次在 targetRank 附近的学校（-30% ~ +50%范围，分冲/稳/保）
    return yearData
      .filter(d => {
        const ratio = (d.minRank - targetRank) / targetRank;
        return ratio >= -0.3 && ratio <= 0.5;
      })
      .sort((a, b) => a.minRank - b.minRank)
      .slice(0, 20)
      .map(d => {
        const ratio = (d.minRank - targetRank) / targetRank;
        let risk: '冲' | '稳' | '保' = '稳';
        if (ratio > 0.1) risk = '保';
        else if (ratio < -0.05) risk = '冲';
        return { ...d, risk };
      });
  }, [queryMode, scoreQueryResult, rankQueryResult, queryYear]);

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Data Sources */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">数据来源清单</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          所有数据均来自以下官方或权威渠道，每条数据均已标注具体出处
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DATA_SOURCES.map((source, i) => (
          <div key={i} className="p-5 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 shadow-card card-shine">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm">{source.name}</h3>
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{source.description}</p>
          </div>
        ))}
      </div>

      {/* Interactive Query Section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-2">
          <Search className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">一分一段表交互查询</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          按分数、位次查询对应排名，并匹配可报考的985/211高校
        </p>

        {/* Query Mode Tabs */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-muted/60 rounded-lg p-1">
            {[
              { id: 'score' as QueryMode, label: '按分数查询', icon: Target },
              { id: 'rank' as QueryMode, label: '按位次查询', icon: Award },
              { id: 'browse' as QueryMode, label: '浏览数据', icon: Table2 },
            ].map(mode => (
              <button
                key={mode.id}
                onClick={() => setQueryMode(mode.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                  queryMode === mode.id
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <mode.icon className="h-3 w-3" />
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* Year Selector */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs text-muted-foreground">查询年份：</span>
          <div className="flex gap-1 flex-wrap">
            {[2021, 2022, 2023, 2024, 2025].map(y => (
              <button
                key={y}
                onClick={() => { setQueryYear(y); setBrowseYear(y); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                  (queryMode === 'browse' ? browseYear : queryYear) === y
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'bg-secondary/80 text-secondary-foreground hover:bg-accent hover:shadow-sm'
                }`}
              >
                {y}年
              </button>
            ))}
          </div>
        </div>

        {/* Score Query */}
        {queryMode === 'score' && (
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border/60 p-5 shadow-card card-shine">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">输入分数：</label>
                  <input
                    type="number"
                    value={queryScore}
                    onChange={e => setQueryScore(e.target.value)}
                    min={200}
                    max={750}
                    className="h-10 w-24 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="620"
                  />
                  <input
                    type="range"
                    value={queryScore}
                    onChange={e => setQueryScore(e.target.value)}
                    min={200}
                    max={750}
                    className="flex-1 max-w-[200px] h-2 accent-primary cursor-pointer"
                  />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
                {scoreQueryResult && (
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">对应位次</div>
                      <div className="text-lg font-bold text-primary">{formatRank(scoreQueryResult.rank)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">本科线差额</div>
                      <div className={`text-lg font-bold ${scoreQueryResult.isAboveLine ? 'text-emerald-400' : 'text-red-400'}`}>
                        {scoreQueryResult.isAboveLine ? '+' : ''}{scoreQueryResult.diff}分
                      </div>
                    </div>
                    {scoreQueryResult.bachelorLine && (
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">{queryYear}本科线</div>
                        <div className="text-sm font-medium">{scoreQueryResult.bachelorLine.score}分</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Score scale visualization */}
              {scoreQueryResult && scoreQueryResult.bachelorLine && (
                <div className="mt-4">
                  <div className="relative h-8 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary/40 to-primary/20 rounded-full"
                      style={{ width: `${Math.min(100, (scoreQueryResult.score / 750) * 100)}%` }}
                    />
                    <div
                      className="absolute top-0 h-full w-0.5 bg-primary"
                      style={{ left: `${(scoreQueryResult.score / 750) * 100}%` }}
                    />
                    <div
                      className="absolute top-0 h-full w-0.5 bg-red-400"
                      style={{ left: `${(scoreQueryResult.bachelorLine.score / 750) * 100}%` }}
                    />
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-medium">200</div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium">750</div>
                  </div>
                  <div className="flex justify-between mt-1 text-[10px] text-muted-foreground">
                    <span>🔵 你的分数: {scoreQueryResult.score}</span>
                    <span>🔴 本科线: {scoreQueryResult.bachelorLine.score}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Rank Query */}
        {queryMode === 'rank' && (
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border/60 p-5 shadow-card card-shine">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">输入位次：</label>
                  <input
                    type="number"
                    value={queryRank}
                    onChange={e => setQueryRank(e.target.value)}
                    min={1}
                    className="h-10 w-32 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="10000"
                  />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
                {rankQueryResult && (
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">对应分数</div>
                      <div className="text-lg font-bold text-primary">{rankQueryResult.score}分</div>
                    </div>
                    {rankQueryResult.bachelorLine && (
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">{queryYear}本科线</div>
                        <div className="text-sm font-medium">{rankQueryResult.bachelorLine.score}分（位次 {formatRank(rankQueryResult.bachelorLine.rank)}）</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Browse Mode */}
        {queryMode === 'browse' && (
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-sm font-medium">分数范围：</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={browseScoreRange[0]}
                    onChange={e => setBrowseScoreRange([Number(e.target.value), browseScoreRange[1]])}
                    className="h-10 w-20 rounded border border-input bg-background px-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <span className="text-xs text-muted-foreground">至</span>
                  <input
                    type="number"
                    value={browseScoreRange[1]}
                    onChange={e => setBrowseScoreRange([browseScoreRange[0], Number(e.target.value)])}
                    className="h-10 w-20 rounded border border-input bg-background px-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div className="flex gap-1 flex-wrap">
                  {[
                    { label: '高分段', range: [650, 750] as [number, number] },
                    { label: '中高分段', range: [580, 650] as [number, number] },
                    { label: '中分段', range: [500, 580] as [number, number] },
                    { label: '本科线附近', range: [430, 500] as [number, number] },
                  ].map(preset => (
                    <button
                      key={preset.label}
                      onClick={() => setBrowseScoreRange(preset.range)}
                      className={`px-2.5 py-1 rounded-lg text-xs transition-all duration-300 ${
                        browseScoreRange[0] === preset.range[0] && browseScoreRange[1] === preset.range[1]
                          ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                          : 'bg-secondary/80 text-secondary-foreground hover:bg-accent hover:shadow-sm'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-muted-foreground mb-2">
                共 {browsedData.length} 条数据
              </div>

              <div className="overflow-auto max-h-[400px] scrollbar-thin rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-secondary/90 backdrop-blur-sm z-10">
                    <tr>
                      <th className="text-left p-2.5 font-semibold text-muted-foreground border-b border-border">分数</th>
                      <th className="text-right p-2.5 font-semibold text-muted-foreground border-b border-border">该分数人数</th>
                      <th className="text-right p-2.5 font-semibold text-muted-foreground border-b border-border">累计位次</th>
                    </tr>
                  </thead>
                  <tbody>
                    {browsedData.map((row, i) => (
                      <tr key={i} className="border-b border-border hover:bg-secondary/30 transition-colors">
                        <td className="p-2.5 font-mono font-medium">{row.score}</td>
                        <td className="p-2.5 text-right font-mono text-muted-foreground">{row.count.toLocaleString()}</td>
                        <td className="p-2.5 text-right font-mono font-medium">{row.rank.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Matched Universities */}
        {(queryMode === 'score' || queryMode === 'rank') && matchedUniversities.length > 0 && (
          <div className="mt-4 bg-card rounded-xl border border-border/60 p-5 shadow-card card-shine">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">
                可报考的985/211高校参考（{queryYear}年，位次±20%范围）
              </h3>
            </div>
            {isMobile ? (
              <div className="divide-y divide-border">
                {matchedUniversities.map((u, i) => {
                  const targetRank = queryMode === 'score' && scoreQueryResult ? scoreQueryResult.rank
                    : rankQueryResult ? rankQueryResult.rank : 0;
                  const diff = u.minRank - targetRank;
                  const riskConfig = {
                    '冲': { icon: Zap, color: 'bg-red-500/15 text-red-500', border: 'border-red-500/20' },
                    '稳': { icon: Shield, color: 'bg-blue-500/15 text-blue-500', border: 'border-blue-500/20' },
                    '保': { icon: ShieldCheck, color: 'bg-emerald-500/15 text-emerald-500', border: 'border-emerald-500/20' },
                  }[u.risk];
                  const RiskIcon = riskConfig.icon;
                  return (
                    <div key={i}>
                      <button
                        onClick={() => setExpandedMatched(expandedMatched === i ? null : i)}
                        className="w-full text-left p-3 flex items-center justify-between"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium truncate">{u.university}</span>
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                              u.tier === '985' ? 'bg-primary/10 text-primary' : 'bg-chart-2/10 text-chart-2'
                            }`}>{u.tier}</span>
                            <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${riskConfig.color}`}>
                              <RiskIcon className="h-2.5 w-2.5" />
                              {u.risk}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                            <span>最低分 <strong className="text-foreground">{u.minScore}</strong></span>
                            <span>位次 <strong className="text-foreground">{formatRank(u.minRank)}</strong></span>
                            <span className={diff <= 0 ? 'text-emerald-400' : 'text-red-400'}>
                              {diff <= 0 ? '安全' : `+${formatRank(diff)}`}
                            </span>
                          </div>
                        </div>
                        <ChevronDownIcon className={`h-4 w-4 text-muted-foreground transition-transform ${expandedMatched === i ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedMatched === i && (
                        <div className="px-3 pb-3 animate-slide-up">
                          <div className="p-3 rounded-lg bg-secondary/30 text-xs space-y-1">
                            <div><span className="text-muted-foreground">专业：</span>{u.major}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="text-left p-2 font-semibold text-muted-foreground border-b border-border">高校</th>
                      <th className="text-left p-2 font-semibold text-muted-foreground border-b border-border">专业</th>
                      <th className="text-center p-2 font-semibold text-muted-foreground border-b border-border">类型</th>
                      <th className="text-center p-2 font-semibold text-muted-foreground border-b border-border">志愿</th>
                      <th className="text-right p-2 font-semibold text-muted-foreground border-b border-border">最低分</th>
                      <th className="text-right p-2 font-semibold text-muted-foreground border-b border-border">最低位次</th>
                      <th className="text-right p-2 font-semibold text-muted-foreground border-b border-border">位次差</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchedUniversities.map((u, i) => {
                      const targetRank = queryMode === 'score' && scoreQueryResult ? scoreQueryResult.rank
                        : rankQueryResult ? rankQueryResult.rank : 0;
                      const diff = u.minRank - targetRank;
                      const riskConfig = {
                        '冲': { icon: Zap, color: 'bg-red-500/15 text-red-500', border: 'border-red-500/20' },
                        '稳': { icon: Shield, color: 'bg-blue-500/15 text-blue-500', border: 'border-blue-500/20' },
                        '保': { icon: ShieldCheck, color: 'bg-emerald-500/15 text-emerald-500', border: 'border-emerald-500/20' },
                      }[u.risk];
                      const RiskIcon = riskConfig.icon;
                      return (
                        <tr key={i} className={`border-b border-border hover:bg-secondary/30 ${
                          u.risk === '冲' ? 'bg-red-500/[0.02]' : u.risk === '保' ? 'bg-emerald-500/[0.02]' : ''
                        }`}>
                          <td className="p-2 font-medium text-xs">{u.university}</td>
                          <td className="p-2 text-xs text-muted-foreground truncate max-w-[150px]" title={u.major}>{u.major}</td>
                          <td className="p-2 text-center">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                              u.tier === '985' ? 'bg-primary/10 text-primary' : 'bg-chart-2/10 text-chart-2'
                            }`}>
                              {u.tier}
                            </span>
                          </td>
                          <td className="p-2 text-center">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${riskConfig.color}`}>
                              <RiskIcon className="h-3 w-3" />
                              {u.risk}
                            </span>
                          </td>
                          <td className="p-2 text-right font-mono text-xs">{u.minScore}</td>
                          <td className="p-2 text-right font-mono text-xs">{formatRank(u.minRank)}</td>
                          <td className={`p-2 text-right font-mono text-xs font-semibold ${diff <= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {diff <= 0 ? '安全' : `+${formatRank(diff)}`}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              * 位次差为负（安全）表示你的位次高于该专业最低位次，为正则需要冲刺
            </p>
          </div>
        )}
      </div>

      {/* Score-Rank Sources */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground">一分一段表数据来源</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {SCORE_RANK_SOURCES.map(s => (
            <a
              key={s.year}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-card border border-border/60 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 shadow-card text-xs"
            >
              {s.year}年 <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>

      {/* Original Score-Rank Table View */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-2">
          <Table2 className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold">一分一段表完整数据</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          分数-位次对照表，完整数据请参考河北省教育考试院官网
        </p>

        <div className="flex gap-2 mb-4">
          {[2021, 2022, 2023, 2024, 2025].map(y => (
            <button
              key={y}
              onClick={() => setExpandedYear(expandedYear === y ? null : y)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                expandedYear === y
                  ? 'gradient-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-secondary/80 text-secondary-foreground hover:bg-accent hover:shadow-sm'
              }`}
            >
              {y}年
            </button>
          ))}
        </div>

        {expandedYear && detailedScoreRankTable[expandedYear] && (
          <div className="bg-card rounded-xl border border-border/60 overflow-hidden animate-fade-in shadow-card card-shine">
            <div className="overflow-x-auto scrollbar-thin max-h-[500px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-secondary/90 backdrop-blur-sm z-10">
                  <tr>
                    <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">分数</th>
                    <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">该分数人数</th>
                    <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">累计位次</th>
                  </tr>
                </thead>
                <tbody>
                  {detailedScoreRankTable[expandedYear].map((row, i) => (
                    <tr key={i} className={`border-b border-border hover:bg-secondary/30 transition-colors ${
                      getBachelorLine(expandedYear)?.score === row.score ? 'bg-primary/5 font-semibold' : ''
                    }`}>
                      <td className="p-3 font-mono font-medium">
                        {row.score}
                        {getBachelorLine(expandedYear)?.score === row.score && (
                          <span className="ml-2 text-[10px] text-primary">本科线</span>
                        )}
                      </td>
                      <td className="p-3 text-right font-mono text-muted-foreground">{row.count.toLocaleString()}</td>
                      <td className="p-3 text-right font-mono">{row.rank.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Data Coverage */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">数据覆盖范围</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: '年份跨度', value: '2021-2025', sub: '5年' },
            { label: '985高校', value: new Set(admissionData.filter(d => d.tier === '985').map(d => d.university)).size, sub: '所' },
            { label: '211高校', value: new Set(admissionData.filter(d => d.tier === '211').map(d => d.university)).size, sub: '所' },
            { label: '专业总数', value: new Set(admissionData.map(d => d.major)).size, sub: '个' },
            { label: '学科门类', value: new Set(admissionData.map(d => d.category)).size, sub: '类' },
            { label: '数据条目', value: admissionData.length, sub: '条' },
            { label: '一分一段表', value: '5年', sub: '详细' },
            { label: '查询功能', value: '3种', sub: '模式' },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border/60 shadow-card text-center hover:shadow-card-hover hover:scale-[1.03] transition-all duration-300 animate-slide-up" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="text-2xl font-bold text-primary">{stat.value}<span className="text-xs text-muted-foreground ml-0.5">{stat.sub}</span></div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
