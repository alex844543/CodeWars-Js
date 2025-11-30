function findShort(s){
  let array = s.split(' ')

  
  let result = Math.min(...array.map(p => p.length));
  
  return result 
  
  
}
