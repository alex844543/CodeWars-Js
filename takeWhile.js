function takeWhile (arr, pred) {

  let ans = []
  
  for(let i = 0 ; i < arr.length ; i++){
    
    let n = arr[i]
    
    if(pred(n)){
      
      ans.push(n)
    } else 
    
    {
      break
      
    }
  }
  
  return ans
}
