const STORAGE_KEY = 'crypto_portfolio_v1';

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  return JSON.parse(raw);
}

function formatUSD(v) {
  return `$${v.toFixed(2)}`;
}

function render() {
  const data = loadData();
  if (!data) return;

  const portfolio = data.portfolio || [];
  const deposit = 10000;

  let invested = 0;
  let current = 0;
  let realized = 0;

  portfolio.forEach(p => {
    invested += p.invested || 0;
    current += p.currentValue || 0;
  });

  const risk = invested / deposit * 100;

  document.getElementById('kpi-deposit').textContent = formatUSD(deposit);
  document.getElementById('kpi-current').textContent = formatUSD(current);
  document.getElementById('kpi-realized').innerHTML =
    realized >= 0 ? `<span class="pos">+${formatUSD(realized)}</span>` : `<span class="neg">${formatUSD(realized)}</span>`;
  document.getElementById('kpi-risk').textContent = risk.toFixed(1) + '%';

  renderTop(portfolio);
  renderCritical(portfolio);
}

function renderTop(portfolio) {
  const tbody = document.querySelector('#top-winners tbody');
  tbody.innerHTML = '';

  portfolio
    .filter(p => p.pnlPct > 0)
    .sort((a, b) => b.pnlPct - a.pnlPct)
    .slice(0, 5)
    .forEach(p => {
      tbody.innerHTML += `
        <tr>
          <td>${p.symbol}</td>
          <td>$${p.currentPrice}</td>
          <td class="pos">+${p.pnlPct.toFixed(1)}%</td>
          <td><a href="portfolio.html">Продать 25%</a></td>
        </tr>
      `;
    });
}

function renderCritical(portfolio) {
  const tbody = document.querySelector('#critical tbody');
  tbody.innerHTML = '';

  portfolio
    .filter(p => p.pnlPct < -50)
    .slice(0, 5)
    .forEach(p => {
      tbody.innerHTML += `
        <tr>
          <td>${p.symbol}</td>
          <td>$${p.currentPrice}</td>
          <td class="neg">${p.pnlPct.toFixed(1)}%</td>
          <td><a class="danger" href="portfolio.html">STOP</a></td>
        </tr>
      `;
    });
}

document.getElementById('refreshBtn').onclick = render;
render();
