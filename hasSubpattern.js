function hasSubpattern(string){
  if (string.length ===1 ) return false
  let count ={
  
  }
  
  for(let c of string){ 
    count[c] = (count[c] || 0) + 1;
  }
  
  let arr = Object.values(count)
  
  let g = arr[0] ;
  
  for(let i = 1 ; i<arr.length ; i++){
     g = gcd(arr[i],g)
  }
  
  return g > 1 ? true : false 
  
  
  
}

function gcd(a, b){

  while(b !== 0){

    let temp = b
    b = a % b
    a = temp
  }

  return a
}
