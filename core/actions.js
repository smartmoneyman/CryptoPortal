import { loadState, saveState } from './state.js';

export function sell(symbol, percent = 100) {
  const state = loadState();
  const p = state.portfolio.find(x => x.symbol === symbol);
  if (!p) return;

  const qty = p.quantity * percent / 100;
  const pnl = (p.current - p.entry) * qty;

  p.quantity -= qty;

  state.history.push({
    date: new Date().toISOString(),
    symbol,
    type: 'SELL',
    qty,
    price: p.current,
    pnl
  });

  if (p.quantity <= 0) {
    state.portfolio = state.portfolio.filter(x => x.symbol !== symbol);
  }

  saveState(state);
}

export function addSignal(signal) {
  const state = loadState();
  state.signals.push({
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    ...signal
  });
  saveState(state);
}
