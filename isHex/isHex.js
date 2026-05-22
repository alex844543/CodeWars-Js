function isHex(str) {

  if(str.length !== 3 && str.length !== 6){
    return false
  }
  
  
  for(let c of str.toLowerCase()){

    if(
      !(c >= '0' && c <= '9') &&
      !(c >= 'a' && c <= 'f')
    ){
      return false
    }
  }
  
return true


};
