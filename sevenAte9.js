 function sevenAte9(str) {
  
   
   let result = []
   
   for(let i = 0 ; i < str.length ; i++){
     if(str[i] === '9' && str[i-1] === '7' && str[i+1] === '7'){
       continue;
     }else{
       result.push(str[i])
     }
   }
   
   return result.join("")
   
   
   
}
