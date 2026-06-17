function pattern(n){
  
  
  let result = []
 
  for(let i = 1 ; i<= n ;i++){
    let num = String(i).repeat(i)
    result.push(num)
  }
  
  return result.join("\n")
  
  
}
