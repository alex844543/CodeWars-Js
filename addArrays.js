function addArrays(array1, array2) {

  if(array1.length !== array2.length){
    throw new Error
  }
  let result = []
  
  for(let i = 0 ; i<array1.length ; i++){
    let n = array1[i] + array2[i]
    result.push(n)
  }
  
  return result
  
}
