function squareOrSquareRoot(array) {

  let res = []
  
  for(let i = 0 ; i < array.length ; i++){
    let root = Math.sqrt(array[i])
    if(Number.isInteger(root)){
res.push(root)
    }else {
      res.push(array[i]**2)
    }
  }


return res

}
