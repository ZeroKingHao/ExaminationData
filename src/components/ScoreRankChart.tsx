import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { ChartTooltip } from './ChartTooltip';
import { useIsMobile } from '../hooks/useIsMobile';
import { detailedScoreRankTable, type ScoreRankEntry } from '../data/scoreRankData';

interface ScoreRankChartProps {
  data: ScoreRankEntry[];
  year: number;
  bachelorScore?: number;
  specialScore?: number;
}

const RANK_NAME = '累计位次';
const COUNT_NAME = '该分数人数';

// 统一坐标范围：基于全部年份的极值固定，切换年份时坐标不变，便于横向趋势对比
const ALL_ENTRIES: ScoreRankEntry[] = Object.values(detailedScoreRankTable).flat();
const GLOBAL_DOMAIN = ALL_ENTRIES.reduce(
  (acc, e) => ({
    minScore: Math.min(acc.minScore, e.score),
    maxScore: Math.max(acc.maxScore, e.score),
    maxRank: Math.max(acc.maxRank, e.rank),
    maxCount: Math.max(acc.maxCount, e.count),
  }),
  { minScore: Infinity, maxScore: -Infinity, maxRank: 0, maxCount: 0 },
);
// X 轴分数下限固定 140：2022-2026 最低分均为 140；2021 含 score<140 的 count=0 展开残留（无趋势意义），
// 固定下限避免 2021 的 score=0 把整轴拉到 0、导致曲线偏右挤在右侧。
const SCORE_AXIS_MIN = 140;

export default function ScoreRankChart({ data, year, bachelorScore, specialScore }: ScoreRankChartProps) {
  const isMobile = useIsMobile();

  // 原始数据为降序(750→低分),按分数升序排序,使 X 轴左低右高、累计位次单调递减
  const sortedData = useMemo(
    () => [...data].sort((a, b) => a.score - b.score),
    [data],
  );

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  if (sortedData.length === 0) {
    return (
      <div className="p-6 rounded-xl bg-secondary/30 border border-dashed border-border/60 text-center text-sm text-muted-foreground">
        {year}年一分一段表暂无数据
      </div>
    );
  }

  const colorMap: Record<string, string> = {
    [RANK_NAME]: 'hsl(var(--chart-1))',
    [COUNT_NAME]: 'hsl(var(--chart-2))',
  };

  // tooltip 数值格式化:位次用「万」、人数用千分位
  const valueFormatter = (value: number, name: string): [string, string] => {
    if (name === RANK_NAME) return [formatRank(value), RANK_NAME];
    return [value.toLocaleString(), COUNT_NAME];
  };

  return (
    <div className="bg-card rounded-xl border border-border/60 p-4 shadow-card card-shine">
      <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
        <LineChart data={sortedData} margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="score"
            type="number"
            domain={[SCORE_AXIS_MIN, GLOBAL_DOMAIN.maxScore]}
            allowDataOverflow={true}
            tickFormatter={v => `${v}`}
            interval="preserveStartEnd"
            minTickGap={30}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            label={{ value: '分数', position: 'insideBottom', offset: -2, fontSize: 12 }}
          />
          <YAxis
            yAxisId="rank"
            orientation="left"
            domain={[0, GLOBAL_DOMAIN.maxRank]}
            tickFormatter={formatRank}
            stroke="hsl(var(--chart-1))"
            fontSize={12}
            width={52}
          />
          <YAxis
            yAxisId="count"
            orientation="right"
            domain={[0, GLOBAL_DOMAIN.maxCount]}
            allowDecimals={false}
            tickFormatter={v => Math.round(v).toLocaleString()}
            stroke="hsl(var(--chart-2))"
            fontSize={12}
            width={44}
          />
          <Tooltip
            content={
              <ChartTooltip
                labelFormatter={l => `${l}分`}
                valueFormatter={valueFormatter}
                colorMap={colorMap}
              />
            }
          />
          <Legend />
          {bachelorScore !== undefined && (
            <ReferenceLine
              x={bachelorScore}
              yAxisId="rank"
              stroke="hsl(var(--primary))"
              strokeDasharray="4 4"
              label={{ value: '本科线', position: 'insideTop', fill: 'hsl(var(--primary))', fontSize: 11 }}
            />
          )}
          {specialScore !== undefined && (
            <ReferenceLine
              x={specialScore}
              yAxisId="rank"
              stroke="hsl(var(--chart-3))"
              strokeDasharray="2 4"
              label={{ value: '特控线', position: 'insideTop', fill: 'hsl(var(--chart-3))', fontSize: 11 }}
            />
          )}
          <Line
            yAxisId="rank"
            type="monotone"
            dataKey="rank"
            name={RANK_NAME}
            stroke="hsl(var(--chart-1))"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
          />
          <Line
            yAxisId="count"
            type="monotone"
            dataKey="count"
            name={COUNT_NAME}
            stroke="hsl(var(--chart-2))"
            dot={false}
            strokeWidth={2}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
