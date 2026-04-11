const fibonacci = n => {

if(n === 1 ){
   return 1   }
  if(n === 2) return 1
  else if(n < 0) return undefined
  
  return fibonacci(n-1) + fibonacci(n-2)

};
