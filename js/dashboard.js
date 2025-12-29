import {getStats} from './portfolio-api.js';
import {getFearGreed} from './market-api.js';

const s=getStats();
document.getElementById('d-invested').textContent='$'+s.invested;
document.getElementById('d-current').textContent='$'+s.cur;
document.getElementById('d-pnl').textContent='$'+s.pnl;
document.getElementById('d-roi').textContent=s.roi.toFixed(1)+'%';
document.getElementById('d-positions').textContent=s.positions;

getFearGreed().then(f=>{
  document.getElementById('fg-value').textContent=f.value;
  document.getElementById('fg-label').textContent=f.value_classification;
});

