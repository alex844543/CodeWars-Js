function isPangram(string){
  
  let str  = string.toLowerCase();
  
  for(let ch of 'abcdefghijklmnopqrstuvwxyz')
    if(str.includes(ch) === false){
      return false 
    }
  
  return true
  
  
  
}
