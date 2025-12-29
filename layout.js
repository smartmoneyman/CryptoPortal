function renderLayout(confirmActive = '') {
  document.body.innerHTML = `
    <div class="app">
      <aside class="sidebar">
        <h2>Crypto Hub</h2>
        <a href="dashboard_v2.4.html" class="${confirmActive === 'dashboard' ? 'active' : ''}">Dashboard</a>
        <a href="portfolio.html" class="${confirmActive === 'portfolio' ? 'active' : ''}">Portfolio</a>
        <a href="signals.html" class="${confirmActive === 'signals' ? 'active' : ''}">Signals</a>
      </aside>
      <main class="main" id="app-content"></main>
    </div>
  `;
}
