function splitByValue(k, elements) {
  let first = []
  let second = []
  
  for(let i of elements){
    if(k<=i){
      second.push(i)
    }else if(k > i ){
      first.push(i)
    }
  }
  
  return [...first,...second] 
  
}
