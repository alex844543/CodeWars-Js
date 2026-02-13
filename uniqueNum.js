function findUniq(arr) {
let a = arr[0];
  let b = arr[1]
  let c = arr[2]
  
  let common;
  
  if(a === b || a === c){
common = a
  }else{
    common =b
  }
  
  for (let n of arr){
    if(n !== common) return n 
  }


}
