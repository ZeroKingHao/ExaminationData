import { useEffect, useRef } from 'react';
import { X, MapPin, School, Award, TrendingUp, Star, ArrowLeftRight, ExternalLink } from 'lucide-react';
import { getUniversityInfo } from '../data/universityInfo';
import { getDataByUniversity } from '../data/admissionData';
import { useAppContext } from '../context/AppContext';
import { useIsMobile } from '../hooks/useIsMobile';

interface UniversityCardProps {
  university: string;
  onClose: () => void;
}

const formatRank = (v: number) => v >= 10000 ? `${(v / 10000).toFixed(1)}万` : v.toLocaleString();

export default function UniversityCard({ university, onClose }: UniversityCardProps) {
  const { addFavorite, removeFavorite, favorites, compareList, addToCompare, setSelectedUniversity, setActiveTab } = useAppContext();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const info = getUniversityInfo(university);

  const stats = (() => {
    const records = getDataByUniversity(university);
    const allRanks = records.map(d => d.minRank);
    const records2025 = records.filter(d => d.year === 2025);
    const scores2025 = records2025.map(d => d.minScore);
    const majorCount = [...new Set(records.map(d => d.major))].length;
    const avgRank = allRanks.length > 0 ? Math.round(allRanks.reduce((a, b) => a + b, 0) / allRanks.length) : 0;
    const minScore2025 = scores2025.length > 0 ? Math.min(...scores2025) : null;
    const minRank2025 = records2025.length > 0 ? Math.min(...records2025.map(d => d.minRank)) : null;
    const tier = records[0]?.tier || '211';
    return { avgRank, minScore2025, minRank2025, majorCount, tier };
  })();

  const isFav = favorites.some(f => f.university === university && f.major === 'all');
  const isInCompare = compareList.includes(university);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className={`bg-card rounded-2xl border border-border shadow-2xl w-full ${isMobile ? 'max-h-[90vh] rounded-b-none' : 'max-w-lg mx-4 max-h-[85vh]'} flex flex-col animate-scale-in`}>
        <div className="gradient-primary p-5 rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-xl font-serif-cn font-bold text-white">{university}</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/15 text-white">
              {stats.tier}
            </span>
            {info?.type && (
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-white/80">
                {info.type}
              </span>
            )}
          </div>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto scrollbar-thin flex-1">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {info?.location ? (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {info.location}
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-muted-foreground/50">
                <MapPin className="h-3.5 w-3.5" />
                暂无所在地信息
              </span>
            )}
          </div>

          {info?.tier && info.tier.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {info.tier.map(t => (
                <span key={t} className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                  t === '985' ? 'bg-chart-3/10 text-chart-3' :
                  t === '211' ? 'bg-chart-1/10 text-chart-1' :
                  'bg-chart-2/10 text-chart-2'
                }`}>{t}</span>
              ))}
            </div>
          )}

          {info?.doubleFirstClass && info.doubleFirstClass.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-chart-3" />
                双一流学科
              </h4>
              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto scrollbar-thin">
                {info.doubleFirstClass.map(subj => (
                  <span key={subj} className="px-2 py-1 rounded-md bg-chart-3/5 text-xs text-foreground border border-chart-3/10">
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          )}

          {info?.highlights && info.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground mb-2">特色标签</h4>
              <div className="flex flex-wrap gap-1.5">
                {info.highlights.map(h => (
                  <span key={h} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!info && (
            <div className="py-6 text-center text-sm text-muted-foreground/60">
              <School className="h-8 w-8 mx-auto mb-2 opacity-20" />
              暂无详细信息
            </div>
          )}

          <div className="p-4 rounded-xl bg-secondary/30 border border-border/40">
            <h4 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              录取统计（基于2021-2025数据）
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-muted-foreground">5年平均最低位次</span>
                <div className="text-base font-bold font-mono mt-0.5">{formatRank(stats.avgRank)}</div>
              </div>
              <div>
                <span className="text-muted-foreground">2025最低分数</span>
                <div className="text-base font-bold font-mono mt-0.5">{stats.minScore2025 ?? '-'}</div>
              </div>
              <div>
                <span className="text-muted-foreground">2025最低位次</span>
                <div className="text-base font-bold font-mono mt-0.5">{stats.minRank2025 ? formatRank(stats.minRank2025) : '-'}</div>
              </div>
              <div>
                <span className="text-muted-foreground">招生专业数</span>
                <div className="text-base font-bold font-mono mt-0.5">{stats.majorCount}</div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center gap-2 p-5 pt-0 flex-shrink-0">
          <button
            onClick={() => { isFav ? removeFavorite(`${university}::all`) : addFavorite({ id: `${university}::all`, university, major: 'all' }); }}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isFav
                ? 'bg-chart-3/10 text-chart-3 border border-chart-3/20'
                : 'bg-secondary/60 text-secondary-foreground hover:bg-accent/60 border border-border/40'
            }`}
          >
            <Star className="h-4 w-4" fill={isFav ? 'currentColor' : 'none'} />
            {isFav ? '已收藏' : '加入收藏'}
          </button>
          <button
            onClick={() => addToCompare(university)}
            disabled={isInCompare || compareList.length >= 5}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isInCompare
                ? 'bg-primary/10 text-primary border border-primary/20'
                : 'bg-secondary/60 text-secondary-foreground hover:bg-accent/60 border border-border/40'
            }`}
          >
            <ArrowLeftRight className="h-4 w-4" />
            {isInCompare ? '已在对比' : '加入对比'}
          </button>
          <button
            onClick={() => { setSelectedUniversity(university); setActiveTab('trend'); onClose(); }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-secondary/60 text-secondary-foreground hover:bg-accent/60 border border-border/40 transition-all"
          >
            <ExternalLink className="h-4 w-4" />
            查看详情
          </button>
        </div>
      </div>
    </div>
  );
}
