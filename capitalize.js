String.prototype.capitalize = function () {

  if(this[0] >= 'a' && this[0] <= 'z'){
    let code = this[0].charCodeAt()
    code = code -32
    let news = String.fromCharCode(code)
    return news + this.slice(1)
  }
  
   return this.toString()



}
