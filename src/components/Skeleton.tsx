interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

function SkeletonBlock({ className = '', style }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse-soft rounded-lg bg-muted ${className}`}
      style={style}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 shadow-card space-y-4">
      <SkeletonBlock className="h-4 w-1/3" />
      <SkeletonBlock className="h-3 w-2/3" />
      <SkeletonBlock className="h-48 w-full rounded-xl" />
      <div className="flex gap-2">
        <SkeletonBlock className="h-8 w-16" />
        <SkeletonBlock className="h-8 w-16" />
        <SkeletonBlock className="h-8 w-16" />
      </div>
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 shadow-card space-y-4">
      <div className="flex items-center justify-between">
        <SkeletonBlock className="h-5 w-48" />
        <div className="flex gap-1">
          <SkeletonBlock className="h-7 w-14" />
          <SkeletonBlock className="h-7 w-14" />
          <SkeletonBlock className="h-7 w-14" />
          <SkeletonBlock className="h-7 w-14" />
        </div>
      </div>
      <SkeletonBlock className="h-[300px] md:h-[400px] w-full rounded-xl" />
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="bg-card rounded-xl border border-border/60 p-6 shadow-card space-y-2">
      <SkeletonBlock className="h-10 w-full" />
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonBlock key={i} className="h-8 w-full" style={{ opacity: 1 - i * 0.08 }} />
      ))}
    </div>
  );
}

export function SkeletonStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-card rounded-xl border border-border/60 p-4 shadow-card space-y-2">
          <SkeletonBlock className="h-3 w-16" />
          <SkeletonBlock className="h-7 w-24" />
        </div>
      ))}
    </div>
  );
}
