function sumDigits(number) {
  
  let newNum = Math.abs(number)
  const stringForm = newNum.toString();
  let sum = 0;
  for(let i = 0; i<stringForm.length;i++){
    sum+=parseInt(stringForm[i])
    
  }
  
  return sum
}
