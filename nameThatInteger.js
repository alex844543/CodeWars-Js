function detectInt() {
if(arguments.length === 0){
  return 1;
}
  
  let num = 1
  while(true){
    
    let pass = true ;
    
    for(let i = 0 ; i<arguments.length;i++){
      if(arguments[i](num) === false){
        pass = false;
        break
      }
    }
    
    if(pass === true ){
      return num
    }
    num++
  }
}
