function findMissing(arr1, arr2) {

  let count1 = {}
  let count2 = {}
  
  for(let c of arr1){
    count1[c] = (count1[c] || 0) + 1
  }
  
    for(let c of arr2){
    count2[c] = (count2[c] || 0) + 1
  }
  
  for(let key in count1){
    if(count1[key] !== count2[key]){
      return Number(key)
    }
  }
  
  
  
}
