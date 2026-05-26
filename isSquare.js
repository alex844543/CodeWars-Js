var isSquare = function(arr){
  
  if(arr.length === 0) return undefined

for(let c of arr){
  let n = Math.sqrt(c)
    if(!Number.isInteger(n)){
      return false
    }
  }

  
  return true

}
