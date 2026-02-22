function twistedSum(n) {
let totalSum = 0

for(let i = 1;i<=n;i++){
  let numStr = i.toString()
  for(let digit of numStr){
    totalSum+=Number(digit)
  }
}
  
  return totalSum
}
