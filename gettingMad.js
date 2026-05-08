function gettingMad(array) {

  
  const hasDuplicates = new Set(array).size !== array.length;
  
  if(hasDuplicates) return 0
  
  let min = []
for(let i = 0 ; i < array.length ; i++){
  for(let j = 0; j <array.length ; j++ ){
 if( i === j ) continue
    else {
      let sub = Math.abs(array[i] - array[j])
      min.push(sub)
    }
    
  }
}
  
  
  
  return Math.min(...min)
  
  }
