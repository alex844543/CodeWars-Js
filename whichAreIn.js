function inArray(array1,array2){
let result = [];
  
  let allTo = array2.join(" ") ;
  
  for(arr of array1){
    if(allTo.includes(arr)){
      if(!result.includes(arr)){
        result.push(arr)
      }
    }
  }
  
  return result.sort();
}
