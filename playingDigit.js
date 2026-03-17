function digPow(n, p){
let digits = String(n).split("")
let sum = 0

for(let i = 0 ; i < digits.length;i++){
  let digit = Number(digits[i])
  
  let power  = p + i
  let value = digit**power
  sum+=value
}
  
  return sum % n === 0 ? sum /  n :  -1


}
