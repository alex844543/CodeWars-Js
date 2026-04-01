function maxRot(n) {
  
  let result  = [n]
  let str = String(n)
  
  
for(let i = 0 ; i < str.length -1 ; i++ ){
  let left = str.slice(0,i)
  let right = str.slice(i)
  let rotated = right.slice(1) + right.slice(0,1)
  str = left + rotated
  
  result.push(str)
}
  
  result = result.map(Number)
  
  return Math.max(...result)
  

}
