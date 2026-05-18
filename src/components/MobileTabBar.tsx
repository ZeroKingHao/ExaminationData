import { TrendingUp, BarChart3, Target, Table2, BookOpen, ArrowLeftRight, Grid3x3 } from 'lucide-react';
import type { TabType } from '../context/AppContext';

interface MobileTabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: 'trend' as TabType, label: '趋势', icon: TrendingUp },
  { id: 'compare' as TabType, label: '对比', icon: ArrowLeftRight },
  { id: 'recommend' as TabType, label: '推荐', icon: Target },
  { id: 'bar' as TabType, label: '排名', icon: BarChart3 },
  { id: 'heatmap' as TabType, label: '热力', icon: Grid3x3 },
  { id: 'table' as TabType, label: '数据', icon: Table2 },
  { id: 'sources' as TabType, label: '来源', icon: BookOpen },
];

export default function MobileTabBar({ activeTab, onTabChange }: MobileTabBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg md:hidden safe-bottom">
      <div className="flex items-center justify-around h-16">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors min-w-0 active:scale-95 ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground active:text-foreground'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="text-[11px] font-medium leading-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
