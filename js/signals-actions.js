import {addToWatchlist} from './watchlist-api.js';
document.addEventListener('click',e=>{
  if(e.target.dataset.watch){
    addToWatchlist(e.target.dataset.watch);
    alert('Added to Watchlist');
  }
});
