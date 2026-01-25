function doubleCheck(str){
let check = str.toLowerCase();
  
  for(let i = 0 ; i<check.length-1;i++){
    if(check[i] === check[i + 1] ){
      return true 
    }
  }
  
  return false



}
