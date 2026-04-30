import { ChevronLeft, ChevronRight, Filter, School, Layers, Calendar } from 'lucide-react';

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
  return (
    <aside
      className={`fixed left-0 top-0 h-full z-40 bg-card border-r border-border transition-all duration-300 flex flex-col ${
        isOpen ? 'w-72' : 'w-16'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-8 z-50 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
      >
        {isOpen ? <ChevronLeft className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
      </button>

      {isOpen ? (
        <div className="p-4 overflow-y-auto scrollbar-thin flex-1">
          {/* Filter Header */}
          <div className="flex items-center gap-2 mb-6 px-1">
            <Filter className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">筛选面板</h2>
          </div>

          {/* University Selector */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2 px-1">
              <School className="h-3.5 w-3.5" />
              选择高校
            </label>
            <div className="relative">
              <select
                value={selectedUniversity}
                onChange={e => onUniversityChange(e.target.value)}
                className="w-full h-9 rounded-lg border border-input bg-background px-3 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              >
                {universities.map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground rotate-90 pointer-events-none" />
            </div>
          </div>

          {/* Category Selector */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2 px-1">
              <Layers className="h-3.5 w-3.5" />
              学科门类
            </label>
            <div className="flex flex-wrap gap-1.5">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => onCategoryChange(c)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                    selectedCategory === c
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Year Selector */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-2 px-1">
              <Calendar className="h-3.5 w-3.5" />
              选择年份
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => onYearChange(y)}
                  className={`h-8 rounded-md text-xs font-medium transition-all duration-200 ${
                    selectedYear === y
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-secondary text-secondary-foreground hover:bg-accent'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 p-3 rounded-lg bg-secondary/50 border border-border">
            <h3 className="text-xs font-semibold text-muted-foreground mb-2">快速统计</h3>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">高校总数</span>
                <span className="font-medium">{universities.length} 所</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">数据年份</span>
                <span className="font-medium">5 年</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">学科门类</span>
                <span className="font-medium">{categories.length - 1} 类</span>
              </div>
            </div>
          </div>

          {/* Data Notice */}
          <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-xs text-muted-foreground leading-relaxed">
              数据来源：河北省教育考试院、掌上高考、中国教育在线、高考100、自主选拔在线等官方渠道。部分数据基于公开信息整理。
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center pt-6 gap-4">
          <School className="h-5 w-5 text-muted-foreground" />
          <Layers className="h-5 w-5 text-muted-foreground" />
          <Calendar className="h-5 w-5 text-muted-foreground" />
        </div>
      )}
    </aside>
  );
}
