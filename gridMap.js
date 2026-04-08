function gridMap(fn,a) {
  
  let newArr = a.map(n => n.map(fn))
  
  return newArr
}  
