function validPhoneNumber(phoneNumber){
if(phoneNumber.length !== 14){
  return false
}
  
  if(phoneNumber[0] !== "(") return false;
    if(phoneNumber[4] !== ")") return false;
  if(phoneNumber[5] !== " ") return false;
  if(phoneNumber[9] !== "-") return false;
  
  for(let i = 1 ; i<=3;i++){
    if(phoneNumber[i] < 0 || phoneNumber[i] > 9){
      return false
    }
  }
  
    for(let i = 6 ; i<=8;i++){
    if(phoneNumber[i] < 0 || phoneNumber[i] > 9){
      return false
    }
  }
  
    for(let i = 10 ; i<=13;i++){
    if(phoneNumber[i] < 0 || phoneNumber[i] > 9){
      return false
    }
  }
  
  return true


}
