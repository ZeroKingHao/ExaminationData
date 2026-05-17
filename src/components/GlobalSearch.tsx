import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Search, X, School, BookOpen } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { admissionData } from '../data/admissionData';

export default function GlobalSearch() {
  const { setSelectedUniversity, setActiveTab } = useAppContext();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const results = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return { universities: [] as string[], majors: [] as { university: string; major: string; category: string }[] };

    const allUnis = [...new Set(admissionData.map(d => d.university))].sort();
    const matchedUnis = allUnis.filter(u => u.toLowerCase().includes(q)).slice(0, 10);

    const allMajors = admissionData.map(d => ({
      university: d.university,
      major: d.major,
      category: d.category,
    }));
    const uniqueMajors = allMajors.filter((v, i, a) =>
      a.findIndex(x => x.university === v.university && x.major === v.major) === i
    );
    const matchedMajors = uniqueMajors.filter(d => d.major.toLowerCase().includes(q)).slice(0, 10);

    return { universities: matchedUnis, majors: matchedMajors };
  }, [debouncedQuery]);

  const handleSelectUniversity = useCallback((name: string) => {
    setSelectedUniversity(name);
    setActiveTab('trend');
    setQuery('');
    setIsOpen(false);
  }, [setSelectedUniversity, setActiveTab]);

  const handleSelectMajor = useCallback((university: string, _major: string) => {
    setSelectedUniversity(university);
    setActiveTab('heatmap');
    setQuery('');
    setIsOpen(false);
  }, [setSelectedUniversity, setActiveTab]);

  const hasResults = results.universities.length > 0 || results.majors.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          placeholder="搜索高校或专业..."
          className="h-9 w-40 sm:w-56 rounded-lg border border-input bg-background pl-9 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        {query && (
          <button
            onClick={() => { setQuery(''); setDebouncedQuery(''); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {isOpen && (
        <div
          ref={panelRef}
          className="absolute top-full right-0 mt-1 w-80 sm:w-96 bg-card border border-border rounded-xl shadow-xl shadow-foreground/10 z-50 max-h-[70vh] overflow-y-auto scrollbar-thin animate-scale-in"
        >
          {!debouncedQuery.trim() ? (
            <div className="px-4 py-6 text-center">
              <Search className="h-8 w-8 text-muted-foreground/30 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">输入关键词搜索高校或专业</p>
              <p className="text-xs text-muted-foreground/60 mt-1">例如："北京"、"计算机"</p>
            </div>
          ) : !hasResults ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              未找到匹配结果
            </div>
          ) : (
            <div>
              {results.universities.length > 0 && (
                <div className="p-2">
                  <h4 className="px-2 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    匹配的高校
                  </h4>
                  {results.universities.map(u => {
                    const tier = admissionData.find(d => d.university === u)?.tier || '211';
                    return (
                      <button
                        key={u}
                        onClick={() => handleSelectUniversity(u)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-accent/50 transition-colors text-left"
                      >
                        <School className="h-4 w-4 text-primary shrink-0" />
                        <span className="flex-1 font-medium">{u}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                          tier === '985' ? 'bg-chart-3/10 text-chart-3' : 'bg-chart-1/10 text-chart-1'
                        }`}>{tier}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {results.majors.length > 0 && (
                <div className="p-2 border-t border-border">
                  <h4 className="px-2 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    匹配的专业
                  </h4>
                  {results.majors.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectMajor(d.university, d.major)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-accent/50 transition-colors text-left"
                    >
                      <BookOpen className="h-4 w-4 text-chart-2 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="font-medium">{d.major}</span>
                        <span className="text-xs text-muted-foreground ml-2">{d.university}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground shrink-0">{d.category}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
