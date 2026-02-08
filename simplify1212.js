function simplify(number){
let str = number.toString();
  let result = [];
  
  for(let i  = 0 ; i<str.length; i++){
    let digit = str[i];
    if(digit !== '0'){
      let power  = str.length - i - 1
      
      if(power === 0 ){
        result.push(digit)
      }
      else{
        result.push(digit + '*1' + '0'.repeat(power))
      }
    }
   
  }
  
  return result.join("+")

}
