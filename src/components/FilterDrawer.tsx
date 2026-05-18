import { useEffect, useRef, useState } from 'react';
import { X, SlidersHorizontal, Sun, Moon, Monitor, Search } from 'lucide-react';
import { getCategories, getYears, getUniversities } from '../data/admissionData';
import { useTheme } from './ThemeProvider';
import { useAppContext } from '../context/AppContext';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  const { theme, setTheme } = useTheme();
  const { selectedUniversity, setSelectedUniversity, selectedCategory, setSelectedCategory, selectedYear, setSelectedYear } = useAppContext();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [uniSearch, setUniSearch] = useState('');

  const categories = ['全部', ...getCategories()];
  const years = getYears();
  const universities = getUniversities();
  const filteredUnis = uniSearch
    ? universities.filter(u => u.includes(uniSearch))
    : universities;

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientY - startY;
    if (diff > 80) onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const themeOptions = [
    { value: 'light' as const, icon: Sun, label: '浅色' },
    { value: 'dark' as const, icon: Moon, label: '深色' },
    { value: 'system' as const, icon: Monitor, label: '跟随系统' },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fade-in" onClick={onClose} />
      <div
        ref={drawerRef}
        className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-2xl border-t border-border shadow-2xl max-h-[80vh] overflow-y-auto scrollbar-thin animate-slide-in-bottom"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/20" />
        </div>

        <div className="px-4 pb-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
              筛选与设置
            </h3>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">选择高校</label>
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                value={uniSearch}
                onChange={e => setUniSearch(e.target.value)}
                placeholder="搜索高校名称..."
                className="w-full h-9 rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              />
            </div>
            <div className="max-h-40 overflow-y-auto scrollbar-thin rounded-lg border border-border/60">
              {filteredUnis.map(uni => (
                <button
                  key={uni}
                  onClick={() => { setSelectedUniversity(uni); onClose(); }}
                  className={`w-full text-left px-3 py-2 text-sm transition-all ${
                    selectedUniversity === uni
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-foreground hover:bg-accent/50'
                  }`}
                >
                  {uni}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">高校分类</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); onClose(); }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/80 text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">年份</label>
            <div className="flex flex-wrap gap-2">
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => { setSelectedYear(y); onClose(); }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium font-mono transition-all ${
                    selectedYear === y
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/80 text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {y}年
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">主题</label>
            <div className="flex items-center gap-2">
              {themeOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    theme === opt.value
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/80 text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  <opt.icon className="h-4 w-4" />
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
