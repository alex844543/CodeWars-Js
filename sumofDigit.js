function digitalRoot(n) {
  
  
  
  while(n >=10){
    
    let ans = 0
  let string = String(n)
    for(let i = 0;i<string.length ;i++){
      ans+=Number(string[i])
    }
    n = ans
  }
  
  return n 
}
