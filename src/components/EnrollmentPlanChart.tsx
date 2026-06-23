import { useMemo, useState, useRef, useEffect } from 'react';
import { enrollmentPlanData } from '../data/enrollmentPlan';
import { getYears } from '../data/admissionData';
import { ClipboardList, Search, X } from 'lucide-react';
import UniversityCard from './UniversityCard';
import { useIsMobile } from '../hooks/useIsMobile';

const YEARS = getYears(); // [2021..2026]，getYears 已含 2026，勿再追加否则列重复

// 6 档色阶：人数越多越暖（红），阈值与 HeatmapChart.getScoreColor 一致
function getPlanColor(num: number, minNum: number, maxNum: number) {
  const normalized = (num - minNum) / (maxNum - minNum + 1);
  if (normalized > 0.85) return { bg: 'rgba(239, 68, 68, 0.85)', text: '#fff' };
  if (normalized > 0.70) return { bg: 'rgba(249, 115, 22, 0.75)', text: '#fff' };
  if (normalized > 0.55) return { bg: 'rgba(245, 158, 11, 0.65)', text: '#1a1a1a' };
  if (normalized > 0.40) return { bg: 'rgba(132, 204, 22, 0.55)', text: '#1a1a1a' };
  if (normalized > 0.25) return { bg: 'rgba(34, 197, 94, 0.55)', text: '#fff' };
  return { bg: 'rgba(6, 182, 212, 0.45)', text: '#fff' };
}

// 从备注提取方向标签（校区/班型），用于明细面板的简短标识
function getDirectionLabel(remark: string): string {
  if (!remark) return '普通';
  if (/芬兰校区/.test(remark)) return '芬兰校区';
  if (/中外合作/.test(remark)) return '中外合作';
  if (/利物浦/.test(remark)) return '利物浦学院';
  if (/马来西亚分校/.test(remark)) return '马来西亚分校';
  if (/创新实验班|创新班/.test(remark)) return '创新班';
  if (/拔尖/.test(remark)) return '拔尖班';
  if (/卓越/.test(remark)) return '卓越班';
  if (/基地班|人才培养基地/.test(remark)) return '基地班';
  const m = remark.match(/（([^（）]{2,12})/);
  return m ? m[1] : '普通';
}

export default function EnrollmentPlanChart({ university }: { university: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUniCard, setShowUniCard] = useState(false);
  const isMobile = useIsMobile();
  const [mobileViewMode, setMobileViewMode] = useState<'card' | 'table'>('card');
  const [selectedCell, setSelectedCell] = useState<{ major: string; year: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // 选中单元格后，明细面板自动滚入视口（面板在表格下方，避免点击后看不见）
  useEffect(() => {
    if (selectedCell && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedCell]);

  // 数据派生：专业并集（按 5 年合计降序）+ 归一化区间 + 各年总计划
  const { majors, minNum, maxNum, totalPlanByYear, hasData } = useMemo(() => {
    const uniPlan = enrollmentPlanData[university] || {};
    const hasData = Object.keys(uniPlan).length > 0;

    const sumByMajor = new Map<string, number>();
    for (const yr of YEARS) {
      const yp = uniPlan[String(yr)];
      if (!yp) continue;
      for (const m of yp.majors) {
        sumByMajor.set(m.name, (sumByMajor.get(m.name) || 0) + m.num);
      }
    }
    const majors = Array.from(sumByMajor.keys()).sort(
      (a, b) => (sumByMajor.get(b) || 0) - (sumByMajor.get(a) || 0)
    );

    let minNum = Infinity;
    let maxNum = -Infinity;
    for (const yr of YEARS) {
      const yp = uniPlan[String(yr)];
      if (!yp) continue;
      // 按专业名分组合计（同年同名累加），颜色归一化基于合计人数而非单条目
      const byName: Record<string, number> = {};
      for (const m of yp.majors) byName[m.name] = (byName[m.name] || 0) + m.num;
      for (const num of Object.values(byName)) {
        if (num < minNum) minNum = num;
        if (num > maxNum) maxNum = num;
      }
    }
    if (!isFinite(minNum)) {
      minNum = 0;
      maxNum = 1;
    }

    const totalPlanByYear: Record<number, number | null> = {};
    for (const yr of YEARS) {
      const yp = uniPlan[String(yr)];
      totalPlanByYear[yr] = yp ? yp.totalPlan : null;
    }

    return { majors, minNum, maxNum, totalPlanByYear, hasData };
  }, [university]);

  const displayMajors = useMemo(() => {
    if (!searchQuery.trim()) return majors;
    const q = searchQuery.toLowerCase();
    return majors.filter((m) => m.toLowerCase().includes(q));
  }, [majors, searchQuery]);

  // 同名专业（不同校区/班型）合并到同一行：num 为同年合计，items 为各条目明细（悬停查看）
  const getCell = (majorName: string, year: number) => {
    const yp = (enrollmentPlanData[university] || {})[String(year)];
    if (!yp) return null;
    const items = yp.majors.filter((m) => m.name === majorName);
    if (items.length === 0) return null;
    return { num: items.reduce((s, m) => s + m.num, 0), items };
  };

  // 空状态：该校无招生计划数据
  if (!hasData) {
    return (
      <div className="animate-fade-in">
        <div className="mb-4 md:mb-6 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-serif-cn font-bold ink-text">{university} · 招生计划</h2>
        </div>
        <div className="bg-card rounded-xl border border-border/60 p-12 shadow-card text-center">
          <p className="text-sm text-muted-foreground">暂无 {university} 的招生计划数据</p>
        </div>
      </div>
    );
  }

  const yearSummary = YEARS.map((y) =>
    totalPlanByYear[y] == null ? null : `${y}: ${totalPlanByYear[y]}`
  )
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="animate-fade-in">
      {/* 标题区 */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-2">
          <ClipboardList className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-serif-cn font-bold ink-text">
            <button onClick={() => setShowUniCard(true)} className="hover:underline cursor-pointer">
              {university}
            </button>{' '}
            · 招生计划
          </h2>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">
          2021–2026 各专业计划招生人数 · 颜色越暖表示当年招生人数越多
        </p>
        {yearSummary && (
          <p className="text-xs text-muted-foreground mt-1 font-mono">全校总计划：{yearSummary}</p>
        )}
      </div>

      {/* 专业搜索框 */}
      <div className="mb-4 flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索专业名称..."
            className="w-full h-9 rounded-lg border border-input bg-background pl-9 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
        <span className="text-xs text-muted-foreground">
          显示 {displayMajors.length} / {majors.length} 个专业
        </span>
      </div>

      {/* 移动端卡片视图 */}
      {isMobile && mobileViewMode === 'card' ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">{displayMajors.length} 个专业</span>
            <button
              onClick={() => setMobileViewMode('table')}
              className="text-xs text-primary hover:underline"
            >
              切换到表格视图
            </button>
          </div>
          {displayMajors.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">未找到匹配专业</p>
          )}
          {displayMajors.map((major) => {
            const cells = YEARS.map((y) => getCell(major, y));
            const validCells = cells.filter((c): c is NonNullable<typeof c> => c !== null);
            const latest = validCells[validCells.length - 1];
            return (
              <div key={major} className="bg-card rounded-xl border border-border/60 p-3 shadow-card-sm">
                <span className="text-sm font-medium">{major}</span>
                {latest && (
                  <p className="text-[10px] text-muted-foreground truncate mb-2">
                    {latest.items[0]?.xuanke}{latest.items.length > 1 ? ` · 等${latest.items.length}个方向` : ''}
                  </p>
                )}
                <div className="flex gap-1.5 overflow-x-auto scrollbar-thin">
                  {YEARS.map((y, yi) => {
                    const cell = cells[yi];
                    if (!cell) {
                      return (
                        <div
                          key={y}
                          className="flex flex-col items-center rounded-lg px-2 py-1.5 min-w-[56px] shrink-0 border-2 border-dashed border-border/60"
                        >
                          <span className="text-[11px] text-muted-foreground/40">-</span>
                          <span className="text-[10px] text-muted-foreground/40">{y}</span>
                        </div>
                      );
                    }
                    const color = getPlanColor(cell.num, minNum, maxNum);
                    const isSelected = selectedCell?.major === major && selectedCell?.year === y;
                    return (
                      <div
                        key={y}
                        onClick={() => setSelectedCell(isSelected ? null : { major, year: y })}
                        className={`flex flex-col items-center rounded-lg px-2 py-1.5 min-w-[56px] shrink-0 cursor-pointer transition-all ${isSelected ? 'ring-2 ring-primary scale-105' : ''}`}
                        style={{ backgroundColor: color.bg, color: color.text }}
                        title={cell.items.length > 1 ? `点击查看 ${cell.items.length} 个方向` : `${cell.num}人`}
                      >
                        <span className="text-[11px] font-bold">{cell.num}</span>
                        {cell.items.length > 1 && <span className="text-[8px] opacity-80 leading-none">方向{cell.items.length}</span>}
                        <span className="text-[10px] opacity-60">{y}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* 桌面端 + 移动端表格视图 */
        <div>
          {isMobile && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">
                {displayMajors.length} 个专业 · 横向滚动查看
              </span>
              <button
                onClick={() => setMobileViewMode('card')}
                className="text-xs text-primary hover:underline"
              >
                切换到卡片视图
              </button>
            </div>
          )}
          <div className="bg-card rounded-xl border border-border/60 p-3 md:p-6 shadow-card card-shine overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[200px]">
                    专业名称
                  </th>
                  {YEARS.map((y) => (
                    <th
                      key={y}
                      className="text-center text-xs font-semibold text-muted-foreground p-3 border-b border-border min-w-[90px]"
                    >
                      {y}年
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayMajors.length === 0 && (
                  <tr>
                    <td colSpan={YEARS.length + 1} className="text-center text-sm text-muted-foreground py-8">
                      未找到匹配专业
                    </td>
                  </tr>
                )}
                {displayMajors.map((major) => (
                  <tr key={major} className="hover:bg-secondary/30 transition-colors">
                    <td className="text-sm font-medium p-3 border-b border-border">{major}</td>
                    {YEARS.map((y) => {
                      const cell = getCell(major, y);
                      if (!cell) {
                        return (
                          <td key={y} className="text-center p-2 border-b border-border">
                            <span className="inline-flex items-center justify-center w-[72px] h-[42px] rounded-lg border-2 border-dashed border-border/60 text-xs text-muted-foreground/40">
                              -
                            </span>
                          </td>
                        );
                      }
                      const color = getPlanColor(cell.num, minNum, maxNum);
                      const isSelected = selectedCell?.major === major && selectedCell?.year === y;
                      return (
                        <td key={y} className="text-center p-2 border-b border-border">
                          <div
                            onClick={() => setSelectedCell(isSelected ? null : { major, year: y })}
                            className={`inline-flex flex-col items-center justify-center rounded-lg p-2 min-w-[72px] transition-all duration-200 cursor-pointer hover:scale-[1.05] ${isSelected ? 'ring-2 ring-primary ring-offset-1 ring-offset-background scale-[1.05]' : ''}`}
                            style={{ backgroundColor: color.bg, color: color.text }}
                            title={cell.items.length > 1 ? `点击查看 ${cell.items.length} 个方向明细` : `${cell.num}人 · 点击查看详情`}
                          >
                            <span className="text-xs font-bold">{cell.num}</span>
                            {cell.items.length > 1 && <span className="text-[9px] opacity-75 leading-none">({cell.items.length}方向)</span>}
                            <span className="text-[10px] opacity-75">人</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 单元格点击展开的方向明细面板 */}
      {selectedCell && (() => {
        const cell = getCell(selectedCell.major, selectedCell.year);
        if (!cell) return null;
        return (
          <div ref={panelRef} className="mt-4 p-4 md:p-5 rounded-xl bg-card border-2 border-primary/40 shadow-card animate-fade-in">
            <div className="flex items-start justify-between mb-3 gap-2">
              <div className="min-w-0">
                <h3 className="text-sm font-serif-cn font-bold ink-text truncate">
                  {selectedCell.major}
                  <span className="text-muted-foreground font-normal"> · {selectedCell.year}年</span>
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {cell.items.length} 个方向 · 合计 <span className="font-bold text-primary">{cell.num}</span> 人
                </p>
              </div>
              <button
                onClick={() => setSelectedCell(null)}
                className="p-1 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shrink-0"
                aria-label="关闭明细"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-1.5">
              {cell.items.map((item, i) => {
                const c = getPlanColor(item.num, minNum, maxNum);
                const label = getDirectionLabel(item.remark);
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-lg border border-border/50 bg-background/50"
                  >
                    <div
                      className="shrink-0 w-12 text-center rounded-md py-1 text-xs font-bold"
                      style={{ backgroundColor: c.bg, color: c.text }}
                    >
                      {item.num}
                    </div>
                    <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium bg-secondary text-secondary-foreground whitespace-nowrap">
                      {label}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] text-muted-foreground">{item.length} · {item.xuanke}</span>
                      {item.remark && (
                        <p className="text-[10px] text-muted-foreground/70 line-clamp-2 mt-0.5" title={item.remark}>
                          {item.remark}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-2 text-center">
              再次点击该单元格可关闭
            </p>
          </div>
        );
      })()}

      {/* 色阶图例 */}
      <div className="mt-4 p-4 rounded-xl bg-card border border-border/60 shadow-card card-shine">
        <h3 className="text-xs font-semibold text-muted-foreground mb-3">
          招生人数色阶（人数越多颜色越暖）
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground mr-2">少</span>
          <div className="flex gap-0.5">
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(6, 182, 212, 0.45)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(34, 197, 94, 0.55)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(132, 204, 22, 0.55)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(245, 158, 11, 0.65)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(249, 115, 22, 0.75)' }} />
            <div className="w-8 h-4 rounded-sm" style={{ background: 'rgba(239, 68, 68, 0.85)' }} />
          </div>
          <span className="text-xs text-muted-foreground ml-2">多</span>
        </div>
      </div>

      {showUniCard && <UniversityCard university={university} onClose={() => setShowUniCard(false)} />}
    </div>
  );
}
