import { loadState } from '../core/state.js';
import { invested, currentValue, unrealizedPnL } from '../core/utils.js';

export function renderDashboard(el) {
  const { portfolio } = loadState();

  const invested$ = invested(portfolio);
  const current$ = currentValue(portfolio);
  const pnl$ = unrealizedPnL(portfolio);

  el.innerHTML = `
    <h1>Dashboard</h1>

    <div class="cards">
      <div>Invested: $${invested$.toFixed(2)}</div>
      <div>Current: $${current$.toFixed(2)}</div>
      <div>PnL: <span class="${pnl$ >= 0 ? 'pos' : 'neg'}">
        ${pnl$.toFixed(2)}</span>
      </div>
    </div>

    <h3>ТОП прибыльные</h3>
    <ul>
      ${portfolio
        .filter(p => p.current > p.entry)
        .sort((a,b)=> (b.current-b.entry)-(a.current-a.entry))
        .slice(0,5)
        .map(p => `<li>${p.symbol} +${(((p.current/p.entry)-1)*100).toFixed(1)}%</li>`)
        .join('')}
    </ul>
  `;
}
