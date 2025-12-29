// js/signals-data.js
export async function loadSignals() {
  const res = await fetch('./data/signals.json');
  return await res.json();
}

