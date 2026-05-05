function twoSort(s) {

  let sorted = s.sort()
  
  let first = sorted[0]
  let result = ''
  for(let i = 0 ; i < first.length ; i++){
    
    if(i !== first.length-1)
      result+=first[i] + "***"
    else 
    result+=first[i];
  }
  
  return result
}
