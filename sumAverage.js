function sumAverage(arrays) {

  let result = 0 
  
for(let char of arrays){
  let n = char.reduce((a,b) => a+b,0)
  n = n/char.length
  result+=n
}

return result
}
