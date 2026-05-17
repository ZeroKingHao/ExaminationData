interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    payload: Record<string, unknown>;
  }>;
  label?: string | number;
  labelFormatter?: (label: string | number) => string;
  valueFormatter?: (value: number, name: string, payload: Record<string, unknown>) => [string, string];
  colorMap?: Record<string, string>;
}

const defaultLabelFmt = (l: string | number) => `${l}`;
const defaultValueFmt = (v: number, n: string): [string, string] => [String(v), n];

export function ChartTooltip({
  active,
  payload,
  label,
  labelFormatter = defaultLabelFmt,
  valueFormatter = defaultValueFmt,
  colorMap,
}: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="animate-scale-in rounded-xl border border-border/50 bg-card/92 backdrop-blur-xl px-4 py-3 shadow-card-xl ring-1 ring-foreground/[0.03]">
      <p className="text-xs font-semibold text-muted-foreground mb-2 border-b border-border/50 pb-1.5">
        {labelFormatter(label ?? '')}
      </p>
      <div className="space-y-1">
        {payload.map((entry, idx) => {
          const color = colorMap?.[entry.name] ?? entry.color ?? 'hsl(var(--primary))';
          const [displayValue, displayName] = valueFormatter(entry.value, entry.name, entry.payload);
          return (
            <div key={idx} className="flex items-center gap-2 text-xs">
              <span
                className="inline-block w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="text-muted-foreground truncate max-w-[160px]">{displayName}</span>
              <span className="font-semibold font-mono ml-auto">{displayValue}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
