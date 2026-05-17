function isDd(n) {
let count = {
  
}
for(let c of String(n)){
count[c] = (count[c] || 0) + 1
 }
  
  
  for(let keys in count){
    if(Number(keys) === count[keys])
      return true
  }
  
  return false
  
  
  
}
