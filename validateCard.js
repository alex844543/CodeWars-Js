function validate(n){
  
  let digits = String(n).split("").map(Number)
  let sum = 0
  let isEven = digits.length % 2 === 0 
  
  for(let i = 0 ; i < digits.length;i++){
    let digit = digits[i]
    
    if((isEven && i % 2 === 0 ) || (!isEven && i % 2 === 1)){
      digit*=2
      if(digit > 9) digit-=9
      
      
    }
        sum+=digit

    
  }
  
  return sum % 10 === 0
  
}
