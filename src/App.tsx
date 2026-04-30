import { useState, lazy, Suspense } from 'react';
import { getUniversities, getCategories, getYears } from './data/admissionData';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import Sidebar from './components/Sidebar';
import TrendChart from './components/TrendChart';
import HeatmapChart from './components/HeatmapChart';
import DataTable from './components/DataTable';
import BarChart from './components/BarChart';

// 懒加载：DataSourceList 包含 145KB+ 的一分一段表数据，只在用户点击"数据来源"时加载
const DataSourceList = lazy(() => import('./components/DataSourceList'));

import { GraduationCap, TrendingUp, BarChart3, Table2, BookOpen, Sun, Moon, Monitor, Loader2 } from 'lucide-react';

export type TabType = 'trend' | 'heatmap' | 'bar' | 'table' | 'sources';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: 'light' as const, icon: Sun, label: '浅色' },
    { value: 'dark' as const, icon: Moon, label: '深色' },
    { value: 'system' as const, icon: Monitor, label: '跟随系统' },
  ];

  return (
    <div className="flex items-center gap-0.5 bg-secondary rounded-lg p-0.5">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={`p-1.5 rounded-md transition-all duration-200 ${
            theme === opt.value
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
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
  const [selectedUniversity, setSelectedUniversity] = useState<string>('北京大学');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [activeTab, setActiveTab] = useState<TabType>('trend');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const universities = getUniversities();
  const categories = ['全部', ...getCategories()];
  const years = getYears();

  const tabs = [
    { id: 'trend' as TabType, label: '招生趋势', icon: TrendingUp },
    { id: 'bar' as TabType, label: '热度排名', icon: BarChart3 },
    { id: 'heatmap' as TabType, label: '热力图', icon: BarChart3 },
    { id: 'table' as TabType, label: '数据表', icon: Table2 },
    { id: 'sources' as TabType, label: '数据来源', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background flex">
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

      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-16'}`}>
        <header className="sticky top-0 z-30 glass-effect border-b border-border">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-chart-6 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl font-bold tracking-tight truncate">河北省985/211高校录取数据分析</h1>
                  <p className="text-xs text-muted-foreground">2021-2025年 物理类（理科）· 含分数线、位次、招生计划</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      <tab.icon className="h-3.5 w-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 animate-fade-in">
          {activeTab === 'trend' && (
            <TrendChart university={selectedUniversity} category={selectedCategory} />
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
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-6 w-6 animate-spin text-primary mr-2" />
                <span className="text-muted-foreground">加载一分一段表数据...</span>
              </div>
            }>
              <DataSourceList />
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
