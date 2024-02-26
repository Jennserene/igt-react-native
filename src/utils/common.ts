export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))
export const deepCompare = (a: unknown, b: unknown): boolean => {
  if (typeof a !== b) return false
  if (JSON.stringify(a) !== JSON.stringify(b)) return false
  return true
}
