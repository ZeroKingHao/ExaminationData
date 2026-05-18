import { useState, useRef, useEffect } from 'react';
import { Star, X, ArrowLeftRight, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { admissionData } from '../data/admissionData';
import { useIsMobile } from '../hooks/useIsMobile';

export default function FavoritesPanel() {
  const { favorites, removeFavorite, clearFavorites, compareList, addToCompare } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  const formatRank = (value: number) => {
    if (value >= 10000) return `${(value / 10000).toFixed(1)}万`;
    return value.toLocaleString();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all"
        title="收藏清单"
      >
        <Star
          className="h-4 w-4"
          fill={favorites.length > 0 ? 'hsl(var(--chart-3))' : 'none'}
          stroke={favorites.length > 0 ? 'hsl(var(--chart-3))' : 'currentColor'}
        />
        {favorites.length > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {favorites.length > 99 ? '99+' : favorites.length}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />

          <div
            ref={panelRef}
            className={`${
              isMobile
                ? 'fixed bottom-0 left-0 right-0 h-[70vh] bg-card rounded-t-2xl border-t border-border shadow-2xl z-50 animate-slide-in-bottom overflow-y-auto scrollbar-thin'
                : 'fixed top-0 right-0 h-full w-80 bg-card border-l border-border shadow-2xl z-50 animate-slide-in-right overflow-y-auto scrollbar-thin'
            }`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 text-chart-3" fill="hsl(var(--chart-3))" />
                  收藏清单
                  <span className="text-xs text-muted-foreground font-normal">({favorites.length})</span>
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {favorites.length === 0 ? (
                <div className="py-12 text-center text-sm text-muted-foreground">
                  <Star className="h-8 w-8 text-muted-foreground/20 mx-auto mb-3" />
                  <p>收藏清单为空</p>
                  <p className="text-xs mt-1">点击学校名称旁的星标按钮添加</p>
                </div>
              ) : (
                <>
                  <div className="space-y-2 mb-4">
                    {favorites.map(item => {
                      const latestRecord = admissionData.find(d =>
                        d.university === item.university &&
                        (item.major === 'all' || d.major === item.major) &&
                        d.year === 2025
                      );
                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/40 hover:border-border transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{item.university}</div>
                            {item.major !== 'all' && (
                              <div className="text-xs text-muted-foreground truncate">{item.major}</div>
                            )}
                            {latestRecord && (
                              <div className="text-[10px] text-muted-foreground mt-0.5">
                                2025最低位次: {formatRank(latestRecord.minRank)} ({latestRecord.minScore}分)
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => addToCompare(item.university)}
                              disabled={compareList.length >= 5 || compareList.includes(item.university)}
                              className={`p-2 rounded transition-colors ${
                                compareList.includes(item.university)
                                  ? 'text-primary'
                                  : 'text-muted-foreground/40 hover:text-primary'
                              }`}
                              title={compareList.includes(item.university) ? '已加入对比' : '加入对比'}
                            >
                              <ArrowLeftRight className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => removeFavorite(item.id)}
                              className="p-2 rounded text-muted-foreground/40 hover:text-destructive transition-colors"
                              title="移除"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={clearFavorites}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-destructive/30 text-xs text-destructive/70 hover:bg-destructive/5 transition-colors"
                  >
                    <Trash2 className="h-3 w-3" />
                    清空全部
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
