function centroid(c) {

  let result = []
  for(let i = 0 ; i < c[0].length ; i++){
      let n = 0

for(let j  = 0 ; j<c.length ; j++){
  n+=c[j][i]
}
    
  n = n/c.length
    result.push(n)
    
    
  }
  
  return result


}
