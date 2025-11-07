function recycleMe(recycle){ 
let plastic = 0;
let glass = 0;
let card = 0;
  let output =[];
  
   for (let i = 0 ; i<recycle.length;i++){
     if(recycle[i] > 0){
       plastic++
     }else if(recycle[i]<0){
       glass++
     }else if(recycle[i]===0){
       card++
     }
   }
  output.push(plastic) 
    output.push(glass)
  output.push(card)
  
  return output

