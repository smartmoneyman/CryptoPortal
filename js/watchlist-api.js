export function getWatchlist(){
  return JSON.parse(localStorage.getItem('watchlist')||'[]');
}
export function addToWatchlist(s){
  const w=getWatchlist();
  if(!w.includes(s)){w.push(s);localStorage.setItem('watchlist',JSON.stringify(w))}
}

