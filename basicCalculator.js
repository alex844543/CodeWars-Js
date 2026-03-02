function calculate(a, operator, b) {
 
if (operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/") {
  return null
}  
  if(typeof operator !== 'string') return null
  
  if(operator === "+"){
    return a + b 
  }else if(operator === '-'){
    return a-b
  }else if(operator === '*'){
    return a*b
  }else if(operator === '/'){
    if(b === 0) return null
    return a/b
  }
  
  
}
