export async function loadSignals(){
  return await (await fetch('./data/signals.json')).json();
}
