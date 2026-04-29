function splitOddAndEven(n) {
  let arr = String(n).split("")
  
  let result = []
  let even = ''
  let odd = ''
  
  
  for(let i = 0 ; i < arr.length ; i++){
    let o1 = arr[i]
    if(o1 % 2 !== 0){
      odd += o1
    } else {
      if(odd !== '') result.push(Number(odd)) 
      odd = ''
    }
    if(o1 % 2 == 0){
      even += o1
    } else {
      if(even !== '') result.push(Number(even)) 
      
      even = ''
    }
  }
  if(odd !== '') 
    result.push(Number(odd))
  if(even !== '') 
    result.push(Number(even))
  
  return result
}
