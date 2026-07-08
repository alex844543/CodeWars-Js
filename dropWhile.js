function dropWhile(array, predicate) {
let res = null
let i = 0
  for( i = 0 ; i < array.length ; i++){
    if(predicate(array[i]) === true){
      res = true
    }else {
      res = false
    }
    
    if(res === false){
      break
    }
  }
  
  return array.slice(i)
  
  
}
