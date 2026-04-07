function ranks(a) {
  
  let count = {
    
  }
  
  let result = []
  
  let newArray = [...a].sort((a,b) => b-a);
  
  for(let i = 0 ; i <newArray.length;i++){
    if(!count[newArray[i]])  count[newArray[i]] = i+1
    else if(count[newArray[i]])
      count[newArray[i]] === count[newArray[i]]

  }
  
  for(let i = 0 ; i<a.length ; i++){
    let res = count[a[i]]
    result.push(res)
  }
  
  return result

}
