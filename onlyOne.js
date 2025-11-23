function onlyOne() {
let trueC = 0;
  for(let i = 0; i<arguments.length; i++){
    if(arguments[i]===true){
      trueC++
    }
    
    if(trueC > 1 ){
      return false
    }
  }
  
if(trueC === 1){
  return true
}else{
  return false
}
}
