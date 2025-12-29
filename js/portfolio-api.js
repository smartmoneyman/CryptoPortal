import {loadStorage} from './storage.js';

export function getPortfolio(){ return loadStorage().portfolio; }
export function getHistory(){ return loadStorage().history; }

export function getStats(deposit=10000){
  const p=getPortfolio();
  let invested=0,cur=0;
  p.forEach(x=>{invested+=x.entry*x.quantity;cur+=x.current*x.quantity});
  return {invested,cur,pnl:cur-invested,roi:(cur-invested)/deposit*100,positions:p.length};
}

