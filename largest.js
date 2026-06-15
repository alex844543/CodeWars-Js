function largest(n, array) {
if(n === 0)
return []  
  
  let sortt = array.sort((a,b) => a-b).slice(-n)
  
  return sortt
  
}
