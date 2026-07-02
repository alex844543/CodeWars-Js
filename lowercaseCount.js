function lowercaseCount(str){
  let count = 0
  for(let c of str ){
    if(c >= 'a' && c <= 'z'){
      count++
    }
  }
  
  return count
  
  
}
