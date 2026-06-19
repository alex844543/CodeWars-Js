function encode(str) {
let result = []
  for(let c of str.toLowerCase()){
    if(c >= 'a' && c <= 'z'){
      let num = c.charCodeAt(0) - 96
      result.push(Number(num))
    }else{
      result.push(c)
    }
  }
  
  return result.join("")
  
  
}
