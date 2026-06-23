// 迷你折线图（sparkline）：把 number[] 画成一条 SVG 折线。
// 被招生计划（EnrollmentPlanChart）与热力图（HeatmapChart）的趋势列共同复用。
// years 与 data 必须等长且一一对应，用于 hover tooltip 显示「年份: 数值」。
interface MiniSparklineProps {
  data: number[];
  years?: number[];
  width?: number;
  height?: number;
}

export default function MiniSparkline({ data, years, width = 60, height = 20 }: MiniSparklineProps) {
  if (data.length < 2) return <span className="text-xs text-muted-foreground">-</span>;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(' ');

  const titleText = years ? data.map((v, i) => `${years[i] ?? '?'}: ${v.toLocaleString()}`).join('\n') : '';

  return (
    <svg width={width} height={height} className="inline-block">
      {titleText && <title>{titleText}</title>}
      <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5} points={points} />
    </svg>
  );
}
