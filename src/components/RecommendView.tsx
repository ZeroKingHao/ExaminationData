import { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { admissionData, getCategories } from '../data/admissionData';
import { getRankByScore } from '../data/scoreRankData';
import { Zap, Shield, ShieldCheck, Star, GitCompare, SlidersHorizontal } from 'lucide-react';

type InputMode = 'score' | 'rank';
type TierFilter = 'all' | '985' | '211';
type RiskLevel = '冲' | '稳' | '保';

interface RecommendResult {
  university: string;
  major: string;
  category: string;
  tier: '985' | '211';
  minScore: number;
  minRank: number;
  riskRatio: number;
  riskLevel: RiskLevel;
}

const riskConfig = {
  '冲': { color: 'text-red-400', bg: 'bg-red-500/8 border-red-500/15', icon: Zap },
  '稳': { color: 'text-blue-400', bg: 'bg-blue-500/8 border-blue-500/15', icon: Shield },
  '保': { color: 'text-emerald-400', bg: 'bg-emerald-500/8 border-emerald-500/15', icon: ShieldCheck },
};

const formatRank = (v: number) => v >= 10000 ? `${(v / 10000).toFixed(1)}万` : v.toLocaleString();

const YEAR_OPTIONS = [2021, 2022, 2023, 2024, 2025];

export default function RecommendView() {
  const { selectedYear, setSelectedYear, addFavorite, favorites, compareList, addToCompare } = useAppContext();

  const [inputMode, setInputMode] = useState<InputMode>('score');
  const [scoreInput, setScoreInput] = useState('');
  const [rankInput, setRankInput] = useState('');
  const [tierFilter, setTierFilter] = useState<TierFilter>('all');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [results, setResults] = useState<RecommendResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const categories = getCategories();

  // 推荐算法
  const generateRecommendations = () => {
    let userRank: number | null = null;

    if (inputMode === 'score') {
      const score = parseInt(scoreInput);
      if (isNaN(score) || score < 200 || score > 750) return;
      userRank = getRankByScore(selectedYear, score);
      if (!userRank) return;
    } else {
      const rank = parseInt(rankInput);
      if (isNaN(rank) || rank < 1) return;
      userRank = rank;
    }

    // 过滤数据
    let filtered = admissionData.filter(record => {
      // 年份匹配
      if (record.year !== selectedYear) return false;

      // 门类匹配
      if (selectedCategories.length > 0 && !selectedCategories.includes(record.category)) return false;

      // 类型匹配
      if (tierFilter !== 'all' && record.tier !== tierFilter) return false;

      return true;
    });

    // 计算风险系数并分类
    const recommendations: RecommendResult[] = filtered
      .map(record => {
        const riskRatio = (record.minRank - userRank!) / userRank!;
        let riskLevel: RiskLevel;

        if (riskRatio < -0.05) {
          riskLevel = '冲';
        } else if (riskRatio <= 0.10) {
          riskLevel = '稳';
        } else {
          riskLevel = '保';
        }

        return {
          university: record.university,
          major: record.major,
          category: record.category,
          tier: record.tier,
          minScore: record.minScore,
          minRank: record.minRank,
          riskRatio,
          riskLevel,
        };
      })
      .sort((a, b) => a.riskRatio - b.riskRatio);

    setResults(recommendations);
    setHasSearched(true);
  };

  // 按风险等级分组
  const groupedResults = useMemo(() => {
    const groups: Record<RiskLevel, RecommendResult[]> = {
      '冲': [],
      '稳': [],
      '保': [],
    };

    results.forEach(result => {
      groups[result.riskLevel].push(result);
    });

    return groups;
  }, [results]);

  // 统计
  const stats = useMemo(() => ({
    total: results.length,
    冲: groupedResults['冲'].length,
    稳: groupedResults['稳'].length,
    保: groupedResults['保'].length,
  }), [results, groupedResults]);

  // 处理收藏
  const handleFavorite = (university: string, major: string) => {
    const id = `${university}::${major}`;
    if (!favorites.some(f => f.id === id)) {
      addFavorite({ id, university, major });
    }
  };

  // 处理对比
  const handleCompare = (university: string) => {
    if (compareList.length < 5 && !compareList.includes(university)) {
      addToCompare(university);
    }
  };

  // 切换门类选择
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="space-y-6">
      {/* 输入区 */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">志愿推荐设置</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* 输入模式切换 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">输入方式</label>
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={() => setInputMode('score')}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-l-lg border ${
                  inputMode === 'score'
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                分数
              </button>
              <button
                onClick={() => setInputMode('rank')}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r ${
                  inputMode === 'rank'
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                位次
              </button>
            </div>
          </div>

          {/* 分数/位次输入 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {inputMode === 'score' ? '高考分数' : '全省位次'}
            </label>
            <input
              type="number"
              value={inputMode === 'score' ? scoreInput : rankInput}
              onChange={e => inputMode === 'score' ? setScoreInput(e.target.value) : setRankInput(e.target.value)}
              placeholder={inputMode === 'score' ? '200-750' : '例如：5000'}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* 年份选择 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">参考年份</label>
            <select
              value={selectedYear}
              onChange={e => setSelectedYear(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              {YEAR_OPTIONS.map(year => (
                <option key={year} value={year}>{year}年</option>
              ))}
            </select>
          </div>

          {/* 类型筛选 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">院校类型</label>
            <select
              value={tierFilter}
              onChange={e => setTierFilter(e.target.value as TierFilter)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="all">全部</option>
              <option value="985">仅985</option>
              <option value="211">仅211</option>
            </select>
          </div>
        </div>

        {/* 门类多选 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">学科门类（可多选）</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 生成按钮 */}
        <button
          onClick={generateRecommendations}
          className="w-full md:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
        >
          生成推荐方案
        </button>
      </div>

      {/* 空状态 */}
      {!hasSearched && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <SlidersHorizontal className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">开始智能推荐</h3>
          <p className="text-gray-600 dark:text-gray-400">输入您的分数或位次，我们将为您推荐合适的院校和专业</p>
        </div>
      )}

      {/* 推荐结果 */}
      {hasSearched && results.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-yellow-50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">未找到匹配结果</h3>
          <p className="text-gray-600 dark:text-gray-400">请尝试调整筛选条件或输入范围</p>
        </div>
      )}

      {hasSearched && results.length > 0 && (
        <>
          {/* 统计摘要 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">推荐方案</div>
            </div>
            <div className={`rounded-lg p-4 border ${riskConfig['冲'].bg}`}>
              <div className={`text-2xl font-bold ${riskConfig['冲'].color}`}>{stats.冲}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">冲刺院校</div>
            </div>
            <div className={`rounded-lg p-4 border ${riskConfig['稳'].bg}`}>
              <div className={`text-2xl font-bold ${riskConfig['稳'].color}`}>{stats.稳}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">稳妥院校</div>
            </div>
            <div className={`rounded-lg p-4 border ${riskConfig['保'].bg}`}>
              <div className={`text-2xl font-bold ${riskConfig['保'].color}`}>{stats.保}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">保底院校</div>
            </div>
          </div>

          {/* 三栏布局 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {(['冲', '稳', '保'] as RiskLevel[]).map(level => {
              const Icon = riskConfig[level].icon;
              const levelResults = groupedResults[level].slice(0, 30);

              if (levelResults.length === 0) return null;

              return (
                <div key={level} className="space-y-3">
                  <div className={`flex items-center gap-2 p-3 rounded-lg border ${riskConfig[level].bg}`}>
                    <Icon className={`w-5 h-5 ${riskConfig[level].color}`} />
                    <h3 className={`font-semibold ${riskConfig[level].color}`}>
                      {level} ({levelResults.length})
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {levelResults.map((item, index) => {
                      const isFavorited = favorites.some(f =>
                        f.id === `${item.university}::${item.major}`
                      );
                      const isInCompare = compareList.includes(item.university);

                      return (
                        <div
                          key={`${item.university}-${item.major}-${index}`}
                          className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900 dark:text-white">
                                  {item.university}
                                </span>
                                <span className={`px-2 py-0.5 text-xs rounded ${
                                  item.tier === '985'
                                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                }`}>
                                  {item.tier}
                                </span>
                              </div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">
                                {item.major}
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <div>
                              <span className="text-gray-500 dark:text-gray-500">分数：</span>
                              {item.minScore}
                            </div>
                            <div>
                              <span className="text-gray-500 dark:text-gray-500">位次：</span>
                              {formatRank(item.minRank)}
                            </div>
                            <div>
                              <span className="text-gray-500 dark:text-gray-500">门类：</span>
                              {item.category}
                            </div>
                            <div className={riskConfig[level].color}>
                              <span className="text-gray-500 dark:text-gray-500">风险：</span>
                              {(item.riskRatio * 100).toFixed(1)}%
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleFavorite(item.university, item.major)}
                              disabled={isFavorited}
                              className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-sm rounded-lg transition-colors ${
                                isFavorited
                                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 cursor-default'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                            >
                              <Star className="w-4 h-4" />
                              {isFavorited ? '已收藏' : '收藏'}
                            </button>
                            <button
                              onClick={() => handleCompare(item.university)}
                              disabled={isInCompare}
                              className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 text-sm rounded-lg transition-colors ${
                                isInCompare
                                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 cursor-default'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                            >
                              <GitCompare className="w-4 h-4" />
                              {isInCompare ? '已对比' : '对比'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
