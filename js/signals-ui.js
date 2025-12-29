// js/signals-ui.js
import { loadSignals } from './signals-data.js';

document.addEventListener('DOMContentLoaded', async () => {
  const signals = await loadSignals();
  renderSignals(signals);
});

function renderSignals(list) {
  const el = document.getElementById('signals-list');

  el.innerHTML = list.map(s => `
    <div class="signal-card ${s.type.toLowerCase()}">
      <div class="signal-header">
        <strong>${s.symbol}</strong>
        <span class="badge ${s.type}">${s.type}</span>
        <span class="source">${s.source}</span>
      </div>

      ${s.type === 'IDEA' ? renderIdea(s) : renderSetup(s)}

      <div class="signal-actions">
        ${renderActions(s)}
      </div>
    </div>
  `).join('');
}

function renderIdea(s) {
  return `
    <div class="signal-body">
      <div>Score: <b>${s.score}%</b> (Δ ${s.scoreDelta > 0 ? '+' : ''}${s.scoreDelta})</div>
      <div>Trend: ${s.trend} (${s.trendPct}%)</div>
      <div>Bias: ${s.bias} <em>${s.riskNote}</em></div>
      <div class="metrics">
        <span>24h: ${s.metrics.price24h}%</span>
        <span>Vol 1h: ${s.metrics.volume1h}%</span>
        <span>OI 1h: ${s.metrics.oi1h}%</span>
        <span>Funding: ${s.metrics.funding}%</span>
      </div>
    </div>
  `;
}

function renderSetup(s) {
  return `
    <div class="signal-body">
      <div>Direction: <b>${s.direction}</b> (${s.timeframe})</div>
      <div>Price: ${s.price}</div>
      <div class="confirm">
        TTM150: ${s.confirmation.ttm150} |
        TTM500: ${s.confirmation.ttm500} |
        MA: ${s.confirmation.priceVsMA}
      </div>
    </div>
  `;
}

function renderActions(s) {
  if (s.type === 'IDEA') {
    return `
      <button data-watch="${s.symbol}">➕ Watchlist</button>
      <a href="${s.chart}" target="_blank">📈 Chart</a>
    `;
  }

  return `
    <button data-add="${s.symbol}">➕ Portfolio</button>
    <button data-watch="${s.symbol}">👀 Watchlist</button>
    <a href="${s.chart}" target="_blank">📈 Chart</a>
  `;
}

