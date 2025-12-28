function XO(str) {
let test = str.toLowerCase();
  let o = 0;
  let x =0;
  for(c of test){
    if(c === 'x'){
       x++
       }else if (c==='o'){
         o++
       }
    
  }
  
  return x ===o


}
