function squares(x, n) {

  let result = []
  let num = x
  
  for(let i = 1 ; i <=n ; i++){

    result.push(num)
    num = num**2
  }
  
  return result
  
  
}
