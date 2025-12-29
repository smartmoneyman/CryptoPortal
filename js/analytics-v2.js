import {getHistory} from './portfolio-api.js';

const h=getHistory();
if(!h.length){document.body.innerHTML+='Нет истории';throw'';}

let eq=10000,peak=eq;
const eqArr=[],ddArr=[],pnlArr=[];

h.forEach(t=>{
  eq+=t.pnlUsd;
  peak=Math.max(peak,eq);
  eqArr.push(eq);
  ddArr.push((eq-peak)/peak*100);
  pnlArr.push(t.pnlUsd);
});

new Chart(equityChart,{type:'line',data:{labels:eqArr.map((_,i)=>i+1),datasets:[{data:eqArr}]}});
new Chart(ddChart,{type:'line',data:{labels:ddArr.map((_,i)=>i+1),datasets:[{data:ddArr}]}});
new Chart(pnlChart,{type:'bar',data:{labels:pnlArr.map((_,i)=>i+1),datasets:[{data:pnlArr}]}});

