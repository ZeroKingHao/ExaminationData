import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type TabType = 'trend' | 'compare' | 'recommend' | 'heatmap' | 'bar' | 'plan' | 'table' | 'sources';

export interface FavoriteItem {
  id: string;       // `${university}::${major}` 或 `${university}::all`
  university: string;
  major: string;    // 'all' 表示收藏整所学校
}

interface AppContextType {
  selectedUniversity: string;
  setSelectedUniversity: (u: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  selectedYear: number;
  setSelectedYear: (y: number) => void;
  activeTab: TabType;
  setActiveTab: (t: TabType) => void;

  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;

  compareList: string[];
  addToCompare: (university: string) => void;
  removeFromCompare: (university: string) => void;
  clearCompare: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedUniversity, setSelectedUniversity] = useState<string>('北京大学');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [activeTab, setActiveTab] = useState<TabType>('trend');

  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);

  const addFavorite = useCallback((item: FavoriteItem) => {
    setFavorites(prev => {
      if (prev.some(f => f.id === item.id)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites(prev => prev.filter(f => f.id !== id));
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const addToCompare = useCallback((university: string) => {
    setCompareList(prev => {
      if (prev.length >= 5) return prev;
      if (prev.includes(university)) return prev;
      return [...prev, university];
    });
  }, []);

  const removeFromCompare = useCallback((university: string) => {
    setCompareList(prev => prev.filter(u => u !== university));
  }, []);

  const clearCompare = useCallback(() => {
    setCompareList([]);
  }, []);

  return (
    <AppContext.Provider value={{
      selectedUniversity, setSelectedUniversity,
      selectedCategory, setSelectedCategory,
      selectedYear, setSelectedYear,
      activeTab, setActiveTab,
      favorites, addFavorite, removeFavorite, clearFavorites,
      compareList, addToCompare, removeFromCompare, clearCompare,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
