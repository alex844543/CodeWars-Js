function arr2bin(arr){
  
  let sum = 0
for(let c of arr){
  if(typeof sum === 'string' || !Number.isInteger(c)) return false
  sum+=c
}
  
  let n = sum.toString(2)
  
  return n


}
