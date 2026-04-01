function maskify(cc) {

  let joined = cc.split(" ").join("")
  
  if(cc.length === 1 ){
    return cc
  }else if(cc === "") return ""
  

  let sliced = cc.slice(-4)
  let frontStr = ''
  
  for(let i = 0 ; i < joined.length-4 ; i++){
    frontStr+='#'
    
  }
  
  return frontStr + sliced
  
}
