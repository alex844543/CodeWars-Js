var isSquare = function(n){
 if(n < 0){
   return false
 }
  
  const root = Math.sqrt(n);
  
  if(Number.isInteger(root)){
    return true
  }else{
    return false
  }


}
