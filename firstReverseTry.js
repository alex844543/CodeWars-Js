function firstReverseTry(arr) {
  
  if(arr.length === 0){
    return []
  }

  let first = arr[0]
  let last = arr[arr.length-1]
  
  arr[0] = last
  arr[arr.length -1] = first
  
  return arr
  
  
  
  
}
