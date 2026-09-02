function multiples(a, b, limit) {
  let res = []
  for(let i = 1 ; i <= limit ;i++){
    if(i % a === 0 && i % b === 0 )
      res.push(i)
  }
  
  
    return res
}
