function alternate(items) {
  if (items.length === 0 ) return null

  for(let c of items){
    if (c === true){
      return true
    }
  }
  
  return false

}
