function uglifyWord(s) {
let res = ''

let flag = 1
for(let ch of s){
  if(ch >= 'A' && ch <='Z' || ch >='a' && ch<= 'z'){
    if(flag === 1){
      res+=ch.toUpperCase()
    }else {
      res+=ch.toLowerCase()
    }
    
flag = flag === 1 ? 0 : 1;
  }else{
    res+=ch
    flag =1
  }
}
  
  return res


}
