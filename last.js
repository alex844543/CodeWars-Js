function last() {
  
  const args = Array.from(arguments)
  
  if (arguments.length ===1){
    const singleR =  arguments[0]
    if(Array.isArray(singleR) || typeof singleR === 'string'){
      return singleR[singleR.length-1]
    }else{
      return singleR
    }
    
  }else{
    return arguments[arguments.length-1]
  } 
  
}
