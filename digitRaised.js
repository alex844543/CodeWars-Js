function sumDigPow(a, b) {
  
  let result = []
for(let num = a ; num <= b ; num++){
  let digit = String(num).split("")
  let sum = 0 
  
  for(let i = 0 ; i < digit.length;i++){
sum += Number(digit[i]) ** (i + 1) 
  }
  
  if(num === sum ){
    result.push(num)
  }
}
  
  return result


}
