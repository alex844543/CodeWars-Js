function containAllRots(strng, arr) {

if(strng === "") return true
let rotaTe = []

for(let i = 0 ; i<strng.length ; i++){
  let rotated = strng.slice(i) + strng.slice(0,i);
  rotaTe.push(rotated)
};
  
  let found = 0
  for(let char of rotaTe){
    let res = arr.find(r=> r === char);
    
    if(res){
      found++
    }
  }
   if(found ===  rotaTe.length ){
     return true
   }else {
return false}

}
