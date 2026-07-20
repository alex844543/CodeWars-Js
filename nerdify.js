function nerdify(txt){
  let result = ''
 for(let c of txt){
   if(c === 'e' || c === 'E'){
     result+='3'
   }else  if(c === 'A' || c === 'a'){
     result+='4'
   }else if(c === 'l'){
     result+='1'
     }
   
   else result+=c
   

 }
  
  return result
  
  
  
}
