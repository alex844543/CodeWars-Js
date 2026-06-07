function completeSeries(arr) {


let count = {
  
}

for(let c of arr){
  count[c] = (count[c] || 0) + 1;
  
}
  
  for(let key in count){
    if(count[key] >=2)
      return  [0]
  }
  
  let result = []
  
  let num = Math.max(...arr)
  
  for(let i = 0 ; i<=num ; i++){
    result.push(i)
  }
  
  return result
  
  

}
