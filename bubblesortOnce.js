function bubblesortOnce(a) {
  let result = [...a];
  
  for(let i = 0; i<result.length-1;i++){
    if(result[i]> result[i+1]){
      let temp = result[i];
      result[i] = result[i+1];
      result[i+1] = temp
      
    }
    
  }
  
  return result
}
