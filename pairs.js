function pairs(ar){
let count = 0 

for(let i = 0 ; i<ar.length-1; i+=2){
  let a = ar[i]
  let b =ar[i+1]
  
  if(a + 1 === b || a - 1 === b){
    count++
  }
}
  
  return count



};
