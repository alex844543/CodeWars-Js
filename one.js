function one(arr, fun){
let count =0
  for(let c of arr){
    if(fun(c)){
      count++
    }
  }
  
  return count == 1 ? true : false
  
}
