function findLineup(distances) {
let n = distances.length;
  let result = new Array(n).fill(null);
  
  
  for(let i = 0; i<n;i++){
    let position = distances[i]+1
    
    if(position>n || result[position-1] !== null){
      return []
    };
    
    result[position-1] = i+1
  }
  
  return result



}
