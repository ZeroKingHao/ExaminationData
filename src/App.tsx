import { useState, lazy, Suspense } from 'react';
import { getUniversities, getCategories, getYears } from './data/admissionData';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { AppProvider, useAppContext } from './context/AppContext';
import type { TabType } from './context/AppContext';
import Sidebar from './components/Sidebar';
import TrendChart from './components/TrendChart';
import HeatmapChart from './components/HeatmapChart';
import DataTable from './components/DataTable';
import BarChart from './components/BarChart';
import GlobalSearch from './components/GlobalSearch';
import FavoritesPanel from './components/FavoritesPanel';

// 懒加载：DataSourceList 包含 145KB+ 的一分一段表数据，只在用户点击"数据来源"时加载
const DataSourceList = lazy(() => import('./components/DataSourceList'));
const CompareView = lazy(() => import('./components/CompareView'));

import { SkeletonChart, SkeletonStats } from './components/Skeleton';

import { GraduationCap, TrendingUp, BarChart3, Table2, BookOpen, Sun, Moon, Monitor, Loader2 } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: 'light' as const, icon: Sun, label: '浅色' },
    { value: 'dark' as const, icon: Moon, label: '深色' },
    { value: 'system' as const, icon: Monitor, label: '跟随系统' },
  ];

  return (
    <div className="flex items-center gap-0.5 bg-muted/60 rounded-lg p-0.5">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={`p-1.5 rounded-md transition-all duration-300 ${
            theme === opt.value
              ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
          }`}
          title={opt.label}
        >
          <opt.icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}

function AppContent() {
  const {
    selectedUniversity,
    setSelectedUniversity,
    selectedCategory,
    setSelectedCategory,
    selectedYear,
    setSelectedYear,
    activeTab,
    setActiveTab,
    sidebarOpen,
    setSidebarOpen,
  } = useAppContext();

  const [prevTabIndex, setPrevTabIndex] = useState(0);

  const universities = getUniversities();
  const categories = ['全部', ...getCategories()];
  const years = getYears();

  const tabs = [
    { id: 'trend' as TabType, label: '招生趋势', icon: TrendingUp },
    { id: 'compare' as TabType, label: '高校对比', icon: BarChart3 },
    { id: 'bar' as TabType, label: '热度排名', icon: BarChart3 },
    { id: 'heatmap' as TabType, label: '热力图', icon: BarChart3 },
    { id: 'table' as TabType, label: '数据表', icon: Table2 },
    { id: 'sources' as TabType, label: '数据来源', icon: BookOpen },
  ];

  const handleTabChange = (tabId: TabType) => {
    setPrevTabIndex(tabs.findIndex(t => t.id === activeTab));
    setActiveTab(tabId);
  };

  const slideDirection = tabs.findIndex(t => t.id === activeTab) >= prevTabIndex
    ? 'animate-slide-in-right'
    : 'animate-slide-in-left';

  return (
    <div className="min-h-screen bg-background bg-grid-paper flex">
      <Sidebar
        universities={universities}
        categories={categories}
        years={years}
        selectedUniversity={selectedUniversity}
        selectedCategory={selectedCategory}
        selectedYear={selectedYear}
        onUniversityChange={setSelectedUniversity}
        onCategoryChange={setSelectedCategory}
        onYearChange={setSelectedYear}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className={`flex-1 transition-all duration-300 ease-out ${sidebarOpen ? 'ml-72' : 'ml-16'}`}>
        <header className="sticky top-0 z-30 glass-effect border-b border-border/60">
          <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/20 ring-1 ring-white/10">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-serif-cn font-bold tracking-tight truncate ink-text">
                    河北省985/211高校录取数据分析
                  </h1>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-muted-foreground tracking-wider">2021–2025</span>
                    <span className="text-[10px] text-muted-foreground/40">|</span>
                    <span className="text-[10px] text-muted-foreground tracking-wide">物理类（理科）</span>
                    <span className="text-[10px] text-muted-foreground/40">|</span>
                    <span className="text-[10px] text-muted-foreground tracking-wide">分数线 · 位次 · 招生计划</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-px bg-secondary/50 rounded-lg p-0.5 overflow-x-auto scrollbar-thin max-w-[280px] sm:max-w-none ring-1 ring-border/30">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/40'
                      }`}
                    >
                      <tab.icon className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>
                <GlobalSearch />
                <FavoritesPanel />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8" key={activeTab}>
          <div className={slideDirection}>
          {activeTab === 'trend' && (
            <TrendChart university={selectedUniversity} category={selectedCategory} />
          )}
          {activeTab === 'compare' && (
            <Suspense fallback={<SkeletonChart />}>
              <CompareView />
            </Suspense>
          )}
          {activeTab === 'heatmap' && (
            <HeatmapChart university={selectedUniversity} category={selectedCategory} />
          )}
          {activeTab === 'bar' && (
            <BarChart year={selectedYear} category={selectedCategory} />
          )}
          {activeTab === 'table' && (
            <DataTable university={selectedUniversity} category={selectedCategory} year={selectedYear} />
          )}
          {activeTab === 'sources' && (
            <Suspense fallback={
              <div className="space-y-6">
                <SkeletonChart />
                <SkeletonStats />
              </div>
            }>
              <DataSourceList />
            </Suspense>
          )}
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
