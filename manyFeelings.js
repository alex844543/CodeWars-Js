function countFeelings(string, array) {

  let count = 0;
  
  for(let word of array){
    let ok = true;
    
    for(let ch of word){
      if(!string.includes(ch)){
         ok =false 
        break 
      }
    }
    
    if (ok) count++
    
  }
  
  return count === 1 ? "1 feeling." : count +" feelings."

}
