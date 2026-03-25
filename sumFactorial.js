function sumFactorial(arr){
  let result = 0
  
  for(let i = 0 ; i <arr.length;i++){
    let fact = 1
    for(let j = 1 ; j <=arr[i] ; j++){
      fact*=j
    }
    
    result+=fact
  }
  
  return result
  

  
}
