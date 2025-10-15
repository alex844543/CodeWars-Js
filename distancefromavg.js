function distancesFromAverage(arr) {
  
  const avg = arr.reduce((a,b)=> a+b , 0)/arr.length;
  
const diFe = arr.map(x => +(avg-x).toFixed(2));
  
  return diFe
  
}
