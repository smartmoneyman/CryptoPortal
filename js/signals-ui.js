import {loadSignals} from './signals-data.js';

loadSignals().then(s=>{
  signals-list.innerHTML=s.map(x=>`
    <div>
      <b>${x.symbol}</b> ${x.type}
      <button data-watch="${x.symbol}">Watch</button>
      <a href="${x.chart}" target="_blank">Chart</a>
    </div>`).join('');
});
