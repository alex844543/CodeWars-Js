function numCombo(arr, num){
  
  
  let sum = arr.reduce((a,b) => a+b,0)
  let count = 0
  for(let i = 0 ; i <arr.length ; i++){
    let remain = sum - arr[i]
    
    if(remain === num){
      count++
    }
  }
  
return count
}
