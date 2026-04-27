function helpZoom(key){
  const n = Math.sqrt(key.length)
  
  if (!Number.isInteger(n)) return "No"

  
  for(let i  = 0 ; i < key.length/2 ; i++){

    if(key[i] !== key[key.length - (i+1)])
      return "No"
  }
  return "Yes"
  
}
