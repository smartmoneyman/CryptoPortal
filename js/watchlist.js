import {getWatchlist,addToWatchlist} from './watchlist-api.js';

window.add=()=>{addToWatchlist(wl.value);render();}
function render(){
  watchlist.innerHTML=getWatchlist().map(s=>`<div>${s}</div>`).join('');
}
render();

