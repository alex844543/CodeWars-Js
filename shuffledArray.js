function shuffledArray(shuffled) {

  
  let total = shuffled.reduce((a,b)=> a+b,0)
  
  let num = total/2
  let index = shuffled.indexOf(num)
  
 shuffled.splice(index,1)
  
  return shuffled.sort((a,b) => a - b)
  
  
  
}
