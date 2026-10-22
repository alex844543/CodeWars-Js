function batteryBars(percent) {

  if(percent < 20 ){
    return '[.....]'
  }
  
  let num =  Math.floor(percent / 20)
  let ans = []
  for(let i = 0 ; i <num ; i++){
    ans.push('#')
  }
  
  return '[' + ans.join('') + '.'.repeat(5 - num) + ']';
  
  
  
}
