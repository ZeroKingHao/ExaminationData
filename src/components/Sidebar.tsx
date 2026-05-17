import { ChevronLeft, ChevronRight, Filter, School, Layers, Calendar, BookMarked, Search, X, Info, Hash, Star } from 'lucide-react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';

interface SidebarProps {
  universities: string[];
  categories: string[];
  years: number[];
  selectedUniversity: string;
  selectedCategory: string;
  selectedYear: number;
  onUniversityChange: (u: string) => void;
  onCategoryChange: (c: string) => void;
  onYearChange: (y: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

// Category icons mapping
const categoryIcons: Record<string, string> = {
  '全部': '',
  '工学': '',
  '理学': '',
  '医学': '',
  '管理学': '',
  '经济学': '',
  '文学': '',
  '法学': '',
  '农学': '',
};

export default function Sidebar({
  universities,
  categories,
  years,
  selectedUniversity,
  selectedCategory,
  selectedYear,
  onUniversityChange,
  onCategoryChange,
  onYearChange,
  isOpen,
  onToggle,
}: SidebarProps) {
  const { favorites, addFavorite, removeFavorite, compareList } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filtered universities based on search
  const filteredUniversities = useMemo(() => {
    if (!searchQuery.trim()) return universities;
    return universities.filter(u => u.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [universities, searchQuery]);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Detect mobile screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Wrapper callbacks that auto-close on mobile
  const handleUniversityChange = (u: string) => {
    onUniversityChange(u);
    if (isMobile) onToggle();
  };
  const handleCategoryChange = (c: string) => {
    onCategoryChange(c);
    if (isMobile) onToggle();
  };
  const handleYearChange = (y: number) => {
    onYearChange(y);
    if (isMobile) onToggle();
  };

  return (
    <>
    <aside
      className={`fixed left-0 top-0 h-full z-50 bg-card border-r border-border/50 transition-all duration-300 ease-out flex flex-col ${
        isOpen ? 'w-72' : 'w-16'
      } ${isMobile ? (isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full') : ''}`}
    >
      {/* Gradient Header Area */}
      {isOpen && (
        <div className="gradient-primary p-4 pb-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_39px,hsl(220_30%_8%/0.08)_39px,hsl(220_30%_8%/0.08)_41px,transparent_41px),linear-gradient(0deg,transparent_31px,hsl(220_30%_8%/0.08)_31px,hsl(220_30%_8%/0.08)_33px,transparent_33px)] bg-[length:40px_32px]" />
          <div className="flex items-center gap-2.5 relative z-10">
            <div className="h-9 w-9 rounded-lg bg-white/12 flex items-center justify-center backdrop-blur-sm ring-1 ring-white/10">
              <BookMarked className="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-serif-cn font-bold text-white tracking-wide">数据筛选</h2>
              <p className="text-[10px] text-white/50 mt-0.5 tracking-wider">QUERY PARAMETERS</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`absolute -right-3 top-8 z-50 h-6 w-6 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 hover:scale-110 active:scale-95 transition-transform duration-200 ${
          isOpen ? '' : 'opacity-0 group-hover/sidebar:opacity-100'
        }`}
      >
        {isOpen ? <ChevronLeft className="h-3 w-3 text-white" /> : <ChevronRight className="h-3 w-3 text-white" />}
      </button>

      {isOpen ? (
        <div className="p-4 overflow-y-auto scrollbar-thin flex-1 animate-fade-in">
          {/* University Selector with Search */}
          <div className="mb-5">
            <label className="academic-label flex items-center gap-2 mb-2 px-1">
              <School className="h-3 w-3 text-primary" />
              选择高校
            </label>
            <div className="relative" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); setIsSearchOpen(true); setHighlightIndex(-1); }}
                  onFocus={() => setIsSearchOpen(true)}
                  onKeyDown={e => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setHighlightIndex(prev => Math.min(prev + 1, filteredUniversities.length - 1));
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setHighlightIndex(prev => Math.max(prev - 1, 0));
                    } else if (e.key === 'Enter' && highlightIndex >= 0 && filteredUniversities[highlightIndex]) {
                      handleUniversityChange(filteredUniversities[highlightIndex]);
                      setSearchQuery('');
                      setIsSearchOpen(false);
                      setHighlightIndex(-1);
                    } else if (e.key === 'Escape') {
                      setIsSearchOpen(false);
                      setHighlightIndex(-1);
                    }
                  }}
                  placeholder={selectedUniversity}
                  className="w-full h-10 rounded-lg border border-input bg-background pl-9 pr-8 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                {searchQuery && (
                  <button
                    onClick={() => { setSearchQuery(''); setIsSearchOpen(true); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg shadow-foreground/5 z-50 max-h-60 overflow-y-auto scrollbar-thin animate-scale-in">
                  {filteredUniversities.length === 0 ? (
                    <div className="px-3 py-4 text-xs text-muted-foreground text-center">未找到匹配的高校</div>
                  ) : (
                    filteredUniversities.map((u, idx) => {
                      const isFav = favorites.some(f => f.university === u && f.major === 'all');
                      return (
                        <div
                          key={u}
                          className={`flex items-center justify-between w-full px-3 py-2 text-sm transition-all duration-150 ${
                            u === selectedUniversity || idx === highlightIndex
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'hover:bg-accent/50 text-foreground'
                          }`}
                        >
                          <button
                            onClick={() => { handleUniversityChange(u); setSearchQuery(''); setIsSearchOpen(false); }}
                            className="flex-1 text-left truncate"
                          >
                            {u}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              isFav ? removeFavorite(`${u}::all`) : addFavorite({ id: `${u}::all`, university: u, major: 'all' });
                            }}
                            className={`p-1 rounded transition-colors ${isFav ? 'text-chart-3' : 'text-muted-foreground/40 hover:text-chart-3'}`}
                            title={isFav ? '取消收藏' : '收藏高校'}
                          >
                            <Star className="h-3 w-3" fill={isFav ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Category Selector */}
          <div className="mb-5">
            <label className="academic-label flex items-center gap-2 mb-2 px-1">
              <Layers className="h-3 w-3 text-primary" />
              学科门类
            </label>
            <div className="flex flex-wrap gap-1.5">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => handleCategoryChange(c)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                    selectedCategory === c
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-secondary/60 text-secondary-foreground hover:bg-accent/60'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Year Selector */}
          <div className="mb-5">
            <label className="academic-label flex items-center gap-2 mb-2 px-1">
              <Calendar className="h-3 w-3 text-primary" />
              选择年份
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => handleYearChange(y)}
                  className={`h-9 rounded text-xs font-semibold font-mono transition-all duration-200 relative ${
                    selectedYear === y
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-secondary/60 text-secondary-foreground hover:bg-accent/60'
                  }`}
                >
                  {y}
                  {y === 2025 && selectedYear !== y && (
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-3 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-chart-3" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-5 academic-divider" />

          {/* Quick Stats */}
          <div className="p-4 rounded-lg bg-secondary/30 border border-border/40">
            <h3 className="academic-label mb-3">统计摘要</h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <School className="h-3 w-3" />
                  高校总数
                </span>
                <span className="font-mono font-semibold tabular-nums text-foreground">{universities.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  数据年份
                </span>
                <span className="font-mono font-semibold tabular-nums text-foreground">5 年</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Layers className="h-3 w-3" />
                  学科门类
                </span>
                <span className="font-mono font-semibold tabular-nums text-foreground">{categories.length - 1}</span>
              </div>
              <div className="academic-divider my-1" />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <Hash className="h-3 w-3" />
                  当前高校
                </span>
                <span className="font-serif-cn font-semibold text-primary text-[11px] truncate max-w-[120px]">{selectedUniversity}</span>
              </div>
            </div>
          </div>

          {/* Data Notice - Collapsible */}
          <div className="mt-4">
            <button
              onClick={() => setShowNotice(!showNotice)}
              className="w-full flex items-center gap-2 text-[11px] text-muted-foreground hover:text-foreground transition-colors px-1"
            >
              <Info className="h-3 w-3" />
              <span>数据来源说明</span>
              <ChevronRight className={`h-3 w-3 ml-auto transition-transform duration-200 ${showNotice ? 'rotate-90' : ''}`} />
            </button>
            {showNotice && (
              <div className="mt-2 p-3 rounded-xl gradient-primary-soft border border-primary/10 animate-slide-up">
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  数据来源：河北省教育考试院、掌上高考、中国教育在线、高考100、自主选拔在线等官方渠道。部分数据基于公开信息整理。
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center pt-6 gap-4">
          {/* Collapsed icons with tooltips */}
          <div className="relative group">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
              <School className="h-4 w-4 text-primary" />
            </div>
            <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-border">
              {selectedUniversity}
            </div>
          </div>
          <div className="relative group">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-border">
              {selectedCategory}
            </div>
          </div>
          <div className="relative group">
            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-border">
              {selectedYear}年
            </div>
          </div>
        </div>
      )}
    </aside>
    {isMobile && isOpen && (
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        onClick={onToggle}
      />
    )}
    </>
  );
}
