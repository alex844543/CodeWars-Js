function height(n) {

  let current = 2000000
  let total = 0
  
  for(let i = 0 ; i <= n ; i++){
     total = total + current
    
    current  = current / 2.5
    
  }
  
  return total.toFixed(3)
  
  
  
}
