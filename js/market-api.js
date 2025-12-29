export async function getFearGreed(){
  const r=await fetch('https://api.alternative.me/fng/');
  const j=await r.json();
  return j.data[0];
}

