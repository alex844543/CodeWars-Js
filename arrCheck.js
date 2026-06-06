const arrCheck = value =>{
  for(let c of value){
    if(!Array.isArray(c))
      return false
  }
  
  return true
}
