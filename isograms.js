function isIsogram(str){
  let small = str.toLowerCase()
  
  let seen = [];
  
  for(s of small){
    
    if(seen.includes(s)){
      return false;
    }else{
      seen.push(s)
    }
  }
  
  return true
  
  
}
