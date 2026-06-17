function pattern(n){

  let result = []
  
  for(let i = 1 ; i<=n ; i+=2){
    let num = String(i).repeat(i)
    result.push(num)
  }
  
  return result.join('\n')
  
  
}
