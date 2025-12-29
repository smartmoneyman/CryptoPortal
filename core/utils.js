export function sum(arr, fn) {
  return arr.reduce((a, x) => a + (fn(x) || 0), 0);
}

export function invested(portfolio) {
  return sum(portfolio, p => p.entry * p.quantity);
}

export function currentValue(portfolio) {
  return sum(portfolio, p => p.current * p.quantity);
}

export function unrealizedPnL(portfolio) {
  return sum(portfolio, p => (p.current - p.entry) * p.quantity);
}
