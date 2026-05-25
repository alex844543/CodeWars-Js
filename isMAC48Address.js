function isMAC48Address(inputString) {

  let splitt = inputString.split("-")
  
  if(splitt.length !== 6) return false;
  let count = 0 ;
  
  for(let ch of splitt){
    for(let c of ch){
      if((c >= 'A' && c<= 'F') ||(c>= '0' && c<='9') ){
        count++
      }
    }
  }
  
  return count === 12 ? true : false
  
  
  
}
