// js/signals-actions.js
import { addToWatchlist } from './watchlist-api.js';

document.addEventListener('click', e => {
  const watch = e.target.dataset.watch;
  if (watch) {
    addToWatchlist(watch);
    alert(`${watch} добавлен в Watchlist`);
  }

  const add = e.target.dataset.add;
  if (add) {
    window.location.href = `portfolio.html?symbol=${add}`;
  }
});
