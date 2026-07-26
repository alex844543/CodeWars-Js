function add(arr) {
  
  
  let final = [arr[0]]
  let el = arr[0]
  
  
  for(let i = 1 ; i <arr.length ; i++){
    el += arr[i]
    final.push(el)
    
  }
  
  return final
  
  
}
