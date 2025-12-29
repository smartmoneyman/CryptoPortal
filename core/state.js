export const STORAGE_KEY = 'crypto_portfolio_v1';

export function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      portfolio: [],
      history: [],
      signals: [],
      meta: { version: '2.1', createdAt: new Date().toISOString() }
    };
  }
  return JSON.parse(raw);
}

export function saveState(state) {
  state.meta.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event('state:update'));
}
