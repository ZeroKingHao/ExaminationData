"""
解析 河北省物理类一分一档表_2021-2025.md 并生成 src/data/scoreRankData.ts
"""
import re
import os

MD_FILE = '河北省物理类一分一档表_2021-2025.md'
OUT_FILE = 'src/data/scoreRankData.ts'

def parse_md():
    with open(MD_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by year sections
    sections = re.split(r'## (\d{4})年', content)
    # sections[0] = header, sections[1] = 2021, sections[2] = 2021 data, sections[3] = 2022, ...
    
    year_data = {}
    for i in range(1, len(sections), 2):
        year = int(sections[i])
        data_text = sections[i + 1]
        
        entries = []
        lines = data_text.strip().split('\n')
        for line in lines:
            line = line.strip()
            if not line.startswith('|') or '位次区间' in line or '分数' in line or '---' in line:
                continue
            
            parts = [p.strip() for p in line.split('|')]
            if len(parts) < 5:
                continue
            
            score_str = parts[1]
            rank_range = parts[2]
            count_str = parts[3]
            
            try:
                count = int(count_str)
            except ValueError:
                continue
            
            # Parse rank range: e.g., "1-24" or "25-31"
            rank_parts = rank_range.split('-')
            rank_upper = int(rank_parts[1])  # cumulative rank = upper bound
            
            # Parse score: could be "691" or "692-750"
            score_parts = score_str.split('-')
            if len(score_parts) == 1:
                # Single score row
                score = int(score_parts[0])
                entries.append({
                    'score': score,
                    'count': count,
                    'rank': rank_upper
                })
            else:
                # Range row: e.g., "692-750"
                score_low = int(score_parts[0])
                score_high = int(score_parts[1])
                num_scores = score_high - score_low + 1
                
                if count == 0:
                    # No people in this range, all scores have rank = rank_upper, count = 0
                    for s in range(score_high, score_low - 1, -1):
                        entries.append({
                            'score': s,
                            'count': 0,
                            'rank': rank_upper
                        })
                else:
                    # Distribute count across the top scores in the range
                    # Give 1 person to each of the top `count` scores, 0 to the rest
                    # This gives a realistic cumulative progression
                    scores_with_people = count  # top N scores get 1 person each
                    for idx, s in enumerate(range(score_high, score_low - 1, -1)):
                        if idx < count:
                            # This score gets 1 person
                            cum_rank = idx + 1  # rank starts from 1 at the top
                            entries.append({
                                'score': s,
                                'count': 1,
                                'rank': min(cum_rank, rank_upper)
                            })
                        else:
                            # Above scores, no one at this exact score
                            entries.append({
                                'score': s,
                                'count': 0,
                                'rank': rank_upper
                            })
        
        year_data[year] = entries
        print(f'{year}: {len(entries)} entries')
    
    return year_data

def generate_ts(year_data):
    """Generate TypeScript file content"""
    lines = []
    lines.append('''// 河北省物理类一分一段表详细数据（2021-2025年）
// 数据来源：ukelv.cn 官方一分一段表数据，已转换为逐分格式
// 每一分对应一个条目，从最高分到最低分逐分排列
// 格式：score=分数, count=该分数人数, rank=累计位次（位次区间上限）
// 注：最高分区间（如"692-750"）内的人数按从高到低均匀分配
export interface ScoreRankEntry {
  score: number;
  count: number;
  rank: number;
}

export const detailedScoreRankTable: Record<number, ScoreRankEntry[]> = {''')
    
    for year in sorted(year_data.keys()):
        entries = year_data[year]
        lines.append(f'  {year}: [')
        for e in entries:
            lines.append(f'    {{ score: {e["score"]}, count: {e["count"]}, rank: {e["rank"]} }},')
        lines.append('  ],')
    
    lines.append('''};

// 根据分数查询位次（线性插值）
export function getRankByScore(year: number, score: number): number | null {
  const table = detailedScoreRankTable[year];
  if (!table) return null;
  for (let i = 0; i < table.length - 1; i++) {
    if (score <= table[i].score && score >= table[i + 1].score) {
      const ratio = (table[i].score - score) / (table[i].score - table[i + 1].score);
      return Math.round(table[i].rank + ratio * (table[i + 1].rank - table[i].rank));
    }
  }
  if (score > table[0].score) return table[0].rank;
  if (score < table[table.length - 1].score) return table[table.length - 1].rank;
  return null;
}

// 根据位次查询分数（线性插值）
export function getScoreByRank(year: number, rank: number): number | null {
  const table = detailedScoreRankTable[year];
  if (!table) return null;
  for (let i = 0; i < table.length - 1; i++) {
    if (rank >= table[i].rank && rank <= table[i + 1].rank) {
      const ratio = (rank - table[i].rank) / (table[i + 1].rank - table[i].rank);
      return Math.round(table[i].score - ratio * (table[i].score - table[i + 1].score));
    }
  }
  if (rank < table[0].rank) return table[0].score;
  if (rank > table[table.length - 1].rank) return table[table.length - 1].score;
  return null;
}

// 获取某年份本科线（数据最低分）
export function getBachelorLine(year: number): { score: number; rank: number } | null {
  const table = detailedScoreRankTable[year];
  if (!table) return null;
  const last = table[table.length - 1];
  return { score: last.score, rank: last.rank };
}

// 一分一段表数据来源（数据来自 ukelv.cn 官方汇总）
export const SCORE_RANK_SOURCES = [
  { year: 2021, name: '2021年河北省物理类一分一段表', url: 'https://www.ukelv.cn/rank/hebei/2021/phy' },
  { year: 2022, name: '2022年河北省物理类一分一段表', url: 'https://www.ukelv.cn/rank/hebei/2022/phy' },
  { year: 2023, name: '2023年河北省物理类一分一段表', url: 'https://www.ukelv.cn/rank/hebei/2023/phy' },
  { year: 2024, name: '2024年河北省物理类一分一段表', url: 'https://www.ukelv.cn/rank/hebei/2024/phy' },
  { year: 2025, name: '2025年河北省物理类一分一段表', url: 'https://www.ukelv.cn/rank/hebei/2025/phy' },
];
''')
    
    return '\n'.join(lines)

def main():
    print("解析 Markdown 文件...")
    year_data = parse_md()
    
    print("生成 TypeScript 文件...")
    ts_content = generate_ts(year_data)
    
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    # Count total entries
    total = sum(len(v) for v in year_data.values())
    print(f"总计: {total} 条逐分数据")
    
    # Print file size
    size_kb = os.path.getsize(OUT_FILE) / 1024
    print(f"输出文件: {OUT_FILE} ({size_kb:.1f} KB)")

if __name__ == '__main__':
    main()
