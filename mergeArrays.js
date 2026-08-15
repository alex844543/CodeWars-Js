function mergeArrays(a, b) {
let arr = null
if(a.length >= b.length) 
  arr = a
  else{
    arr = b
  }
  
  let res  = []
  for(let i = 0 ; i < arr.length ; i++){
    if(a[i] !== undefined) res.push(a[i])
if(b[i] !== undefined){
  res.push(b[i])
}
  
  }
  
  return res


}
