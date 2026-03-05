function AtbashCipher(abc) {
  this.encode = function (str) {
    
    let result = ""
    let len = abc.length
    for(let ch of str ){
let index = abc.indexOf(ch)

if(index === -1){
  result+=ch
}else{
  result +=abc[len - 1 - index]
}
    }
    
    return result
  };
  this.decode = function (str) {
   return this.encode(str)
  
  };
}
