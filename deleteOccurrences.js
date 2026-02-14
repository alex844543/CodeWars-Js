function deleteNth(arr,n){
let count = {}
let result = [];
  
  for(let num of arr){
    if(!count[num]){
      count[num]= 0
    }
    
    if(count[num] < n){
      result.push(num)
      count[num]++
    }
  }
  
  return result 


}
