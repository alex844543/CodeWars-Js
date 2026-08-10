function kaprekarSplit(n){

let squareStr = (n**2).toString()
  
  
  for(let i = 0 ; i <squareStr.length ; i++){
    let left = squareStr.slice(0,i)
    let right = squareStr.slice(i)
    
    if(Number(left) + Number(right) === n){
      return i
    }
  }

  return -1

}
