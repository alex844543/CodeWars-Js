function noRepeat(str) {  

  let count = {}
  
  for(let c of str){
  
    count[c] = (count[c] || 0) + 1
  }
  
  for(let key in count){
    if(count[key] === 1){
      return key
    }
  }
  
  
}
