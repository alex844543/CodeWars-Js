function jumpingNumber(n){

if(n >=0 && n <=9){
  return "Jumping!!"
}
  
  
  let str = String(n)
  
  for(let i = 0 ; i < str.length -1  ; i++){
    let sum = Number(str[i]) - Number(str[i + 1]);
    
    sum = Math.abs(sum);
 
    if(sum !== 1) return "Not!!"
    
  }
  
  return "Jumping!!"
  


}
