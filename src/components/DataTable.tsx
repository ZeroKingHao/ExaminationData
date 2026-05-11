import { useMemo, useState, useCallback } from 'react';
import { admissionData } from '../data/admissionData';
import { Table2, Download, ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, Check } from 'lucide-react';

type SortField = 'year' | 'major' | 'category' | 'tier' | 'minScore' | 'minRank' | 'avgScore' | 'avgRank' | 'enrollment';
type SortDir = 'asc' | 'desc';

const PAGE_SIZE = 20;

interface DataTableProps {
  university: string;
  category: string;
  year: number;
}

export default function DataTable({ university, category, year }: DataTableProps) {
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [page, setPage] = useState(0);
  const [exportSuccess, setExportSuccess] = useState(false);

  const filteredData = useMemo(() => {
    let data = admissionData.filter(d => d.university === university);
    if (category !== '全部') {
      data = data.filter(d => d.category === category);
    }
    return data;
  }, [university, category, year]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
      }
      return sortDir === 'asc'
        ? String(aVal || '').localeCompare(String(bVal || ''))
        : String(bVal || '').localeCompare(String(aVal || ''));
    });
  }, [filteredData, sortField, sortDir]);

  const totalPages = Math.ceil(sortedData.length / PAGE_SIZE);
  const paginatedData = useMemo(() => {
    return sortedData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  }, [sortedData, page]);

  const handleSort = useCallback((field: SortField) => {
    if (sortField === field) {
      setSortDir(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir(field === 'year' || field === 'minRank' || field === 'minScore' ? 'desc' : 'asc');
    }
    setPage(0);
  }, [sortField]);

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="h-3 w-3 ml-1 opacity-30" />;
    return sortDir === 'asc' ? <ArrowUp className="h-3 w-3 ml-1 text-primary" /> : <ArrowDown className="h-3 w-3 ml-1 text-primary" />;
  };

  const handleExport = () => {
    const headers = ['年份', '高校', '专业', '学科门类', '层次', '最低分', '最低位次', '平均分', '平均位次', '招生人数', '数据来源'];
    const rows = filteredData.map(d =>
      [d.year, d.university, d.major, d.category, d.tier, d.minScore, d.minRank, d.avgScore || '', d.avgRank || '', d.enrollment || '', d.source].join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const bom = '\uFEFF';
    const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${university}_录取数据.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 2000);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Table2 className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">{university} · 结构化数据表</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            全部年份录取数据明细
            {category !== '全部' && ` · 已筛选：${category}`}
          </p>
        </div>
        <button
          onClick={handleExport}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-all shadow-lg shadow-primary/20 ${
            exportSuccess
              ? 'bg-emerald-500 shadow-emerald-500/20'
              : 'gradient-primary hover:opacity-90'
          }`}
        >
          {exportSuccess ? (
            <><Check className="h-4 w-4" /> 已导出</>
          ) : (
            <><Download className="h-4 w-4" /> 导出 CSV</>
          )}
        </button>
      </div>

      <div className="bg-card rounded-xl border border-border/60 shadow-card card-shine overflow-hidden">
        <div className="overflow-auto max-h-[600px] scrollbar-thin">
          <table className="w-full text-xs sm:text-sm">
            <thead className="sticky top-0 z-20">
              <tr className="bg-card border-b border-border">
                <th className="sticky left-0 z-10 bg-card text-left p-3 font-semibold text-muted-foreground border-b border-border cursor-pointer hover:text-foreground transition-colors select-none" onClick={() => handleSort('year')}>
                  <span className="inline-flex items-center">年份 <SortIcon field="year" /></span>
                </th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border cursor-pointer hover:text-foreground transition-colors select-none" onClick={() => handleSort('major')}>
                  <span className="inline-flex items-center">专业 <SortIcon field="major" /></span>
                </th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border cursor-pointer hover:text-foreground transition-colors select-none" onClick={() => handleSort('category')}>
                  <span className="inline-flex items-center">学科 <SortIcon field="category" /></span>
                </th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">层次</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border cursor-pointer hover:text-foreground transition-colors select-none" onClick={() => handleSort('minScore')}>
                  <span className="inline-flex items-center justify-end">最低分 <SortIcon field="minScore" /></span>
                </th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border cursor-pointer hover:text-foreground transition-colors select-none" onClick={() => handleSort('minRank')}>
                  <span className="inline-flex items-center justify-end">最低位次 <SortIcon field="minRank" /></span>
                </th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">平均分</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">平均位次</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border cursor-pointer hover:text-foreground transition-colors select-none" onClick={() => handleSort('enrollment')}>
                  <span className="inline-flex items-center justify-end">招生人数 <SortIcon field="enrollment" /></span>
                </th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">来源</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((d, i) => (
                <tr
                  key={`${d.year}-${d.major}-${i}`}
                  className={`border-b border-border hover:bg-primary/8 hover:shadow-inner transition-all duration-200 ${
                    d.year === year ? 'table-row-highlight' : ''
                  }`}
                >
                  <td className="sticky left-0 bg-card p-3 font-medium">{d.year}</td>
                  <td className="p-3 font-medium max-w-[220px]">{d.major}</td>
                  <td className="p-3 text-muted-foreground">{d.category}</td>
                  <td className="p-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      d.tier === '985'
                        ? 'bg-chart-1/15 text-chart-1'
                        : 'bg-chart-2/15 text-chart-2'
                    }`}>
                      {d.tier}
                    </span>
                  </td>
                  <td className="p-3 text-right font-mono">{d.minScore}</td>
                  <td className="p-3 text-right font-mono">{d.minRank.toLocaleString()}</td>
                  <td className="p-3 text-right font-mono text-muted-foreground">{d.avgScore || '-'}</td>
                  <td className="p-3 text-right font-mono text-muted-foreground">{d.avgRank?.toLocaleString() || '-'}</td>
                  <td className="p-3 text-right font-mono">{d.enrollment || '-'}</td>
                  <td className="p-3 text-xs text-muted-foreground">{d.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            共 {sortedData.length} 条，第 {page + 1}/{totalPages} 页
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i;
              } else if (page < 3) {
                pageNum = i;
              } else if (page > totalPages - 4) {
                pageNum = totalPages - 5 + i;
              } else {
                pageNum = page - 2 + i;
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition-all duration-200 ${
                    page === pageNum
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'border border-border bg-card hover:bg-accent'
                  }`}
                >
                  {pageNum + 1}
                </button>
              );
            })}
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page >= totalPages - 1}
              className="p-1.5 rounded-lg border border-border bg-card hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: '数据条数', value: filteredData.length, suffix: '条', color: 'from-primary/15 to-primary/5' },
          { label: '涵盖专业', value: new Set(filteredData.map(d => d.major)).size, suffix: '个', color: 'from-chart-2/15 to-chart-2/5' },
          { label: '最低位次范围', value: `${Math.min(...filteredData.map(d => d.minRank)).toLocaleString()} - ${Math.max(...filteredData.map(d => d.minRank)).toLocaleString()}`, suffix: '', color: 'from-chart-3/15 to-chart-3/5' },
          { label: '平均招生人数', value: Math.round(filteredData.reduce((s, d) => s + (d.enrollment || 0), 0) / filteredData.length), suffix: '人/专业', color: 'from-chart-4/15 to-chart-4/5' },
        ].map((stat, i) => (
          <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} border border-border/60 shadow-card`}>
            <div className="text-xs text-muted-foreground mb-1.5 font-medium">{stat.label}</div>
            <div className="text-lg font-bold">
              {stat.value}
              <span className="text-xs text-muted-foreground ml-1 font-normal">{stat.suffix}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
