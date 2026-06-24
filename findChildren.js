function findChildren(dancingBrigade) {

  let count = []
  
  let sp = dancingBrigade.toLowerCase().split("").sort()
  
  for(let c of sp){
      count[c] = (count[c] || 0) + 1
  }
  
  let result = ''
  
  for(let keys in count){
  let str = keys.toUpperCase() + keys.repeat(count[keys]-1)
  result+=str
  }
  
  return result


}
