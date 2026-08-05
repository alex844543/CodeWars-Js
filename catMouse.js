function catMouse(x){

  let count = 0
  
  for(let c of x){
    if(c === '.'){
      count++
    }
  }
  
  return count <= 3 ? 'Caught!' : 'Escaped!'
  
  
}
