function uniDecoder(...nums){
  let arr = [...nums]
  let str = ''
  
  for(let i = 0 ;  i <arr.length ; i++){
if(typeof arr[i] === 'number'){
  let c = String.fromCharCode(arr[i])
  str+=c
}

  
  }
  
  return str === "" ? 'not a valid character code' : str
  
}
