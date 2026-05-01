function rotateAgainstClockwise(matrix, times) {

  times%= 4;
  
  for(let i = 0 ; i < times ;i++){
      let result = []

    for(let j  = matrix[0].length - 1 ; j >=0 ; j--){
      let res = []
      for(let k = 0 ;k < matrix.length;k++){
        res.push(matrix[k][j])
      }
      result.push(res)
    }
    
    matrix = result
  }
  
  return matrix
  
}
