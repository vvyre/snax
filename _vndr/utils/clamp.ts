export const MathClamp = (min: number, prefer: number, max: number) =>
  Math.min(max, Math.max(min, prefer))
