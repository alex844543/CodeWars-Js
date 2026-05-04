function prefill(n, v) {
  let numN = Number(n)
  
  if( n < 0 ||  !Number.isInteger(numN) ||  typeof n === "boolean"){
  throw new TypeError(`${n} is invalid`);
  }
  
  let result =[]
  
  for(let i = 0 ; i < numN ;i++){
    result.push(v)
  }
  
  return result
}
