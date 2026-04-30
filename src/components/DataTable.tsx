import { useMemo } from 'react';
import { admissionData } from '../data/admissionData';
import { Table2, Download } from 'lucide-react';

interface DataTableProps {
  university: string;
  category: string;
  year: number;
}

export default function DataTable({ university, category, year }: DataTableProps) {
  const filteredData = useMemo(() => {
    let data = admissionData.filter(d => d.university === university);
    if (category !== '全部') {
      data = data.filter(d => d.category === category);
    }
    return data.sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return a.minRank - b.minRank;
    });
  }, [university, category, year]);

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
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
        >
          <Download className="h-4 w-4" />
          导出 CSV
        </button>
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">年份</th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">专业</th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">学科</th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">层次</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">最低分</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">最低位次</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">平均分</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">平均位次</th>
                <th className="text-right p-3 font-semibold text-muted-foreground border-b border-border">招生人数</th>
                <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">来源</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((d, i) => (
                <tr
                  key={`${d.year}-${d.major}-${i}`}
                  className={`border-b border-border hover:bg-secondary/30 transition-colors ${
                    d.year === year ? 'bg-primary/5' : ''
                  }`}
                >
                  <td className="p-3 font-medium">{d.year}</td>
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

      {/* Summary Stats */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {[
          { label: '数据条数', value: filteredData.length, suffix: '条' },
          { label: '涵盖专业', value: new Set(filteredData.map(d => d.major)).size, suffix: '个' },
          { label: '最低位次范围', value: `${Math.min(...filteredData.map(d => d.minRank)).toLocaleString()} - ${Math.max(...filteredData.map(d => d.minRank)).toLocaleString()}`, suffix: '' },
          { label: '平均招生人数', value: Math.round(filteredData.reduce((s, d) => s + (d.enrollment || 0), 0) / filteredData.length), suffix: '人/专业' },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl bg-card border border-border">
            <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
            <div className="text-lg font-bold">
              {stat.value}
              <span className="text-xs text-muted-foreground ml-1">{stat.suffix}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
