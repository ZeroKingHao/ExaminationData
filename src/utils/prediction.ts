interface Point {
  x: number;
  y: number;
}

interface RegressionResult {
  slope: number;
  intercept: number;
  r2: number;
}

/** 最小二乘线性回归 */
export function linearRegression(points: Point[]): RegressionResult {
  const n = points.length;
  if (n < 2) return { slope: 0, intercept: 0, r2: 0 };

  const sumX = points.reduce((s, p) => s + p.x, 0);
  const sumY = points.reduce((s, p) => s + p.y, 0);
  const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);
  const sumX2 = points.reduce((s, p) => s + p.x * p.x, 0);

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  const meanY = sumY / n;
  const ssTot = points.reduce((s, p) => s + (p.y - meanY) ** 2, 0);
  const ssRes = points.reduce((s, p) => s + (p.y - (slope * p.x + intercept)) ** 2, 0);
  const r2 = ssTot === 0 ? 1 : 1 - ssRes / ssTot;

  return { slope, intercept, r2 };
}

interface PredictionResult {
  predictedValue: number;
  upperBound: number;
  lowerBound: number;
  r2: number;
}

/** 预测下一年值（含 95% 置信区间） */
export function predictNextYear(
  points: Point[],
  nextX: number,
): PredictionResult {
  const { slope, intercept, r2 } = linearRegression(points);
  const predictedValue = slope * nextX + intercept;

  const n = points.length;
  const residuals = points.map(p => p.y - (slope * p.x + intercept));
  const se = n > 2
    ? Math.sqrt(residuals.reduce((s, r) => s + r * r, 0) / (n - 2))
    : 0;

  const margin = 1.96 * se;

  return {
    predictedValue: Math.round(predictedValue),
    upperBound: Math.round(predictedValue + margin),
    lowerBound: Math.round(predictedValue - margin),
    r2,
  };
}
