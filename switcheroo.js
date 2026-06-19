function switcheroo(x){
let result = []
  for(let c of x){
    if(c === 'a')
      result.push('b')
    else if(c === 'b')
      result.push('a')
    else 
    result.push(c)
  }
  
  return result.join("")
  
  
}
