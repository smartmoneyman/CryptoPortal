export function loadStorage(){
  return JSON.parse(localStorage.getItem('portfolioExcel'))||{portfolio:[],history:[]};
}
