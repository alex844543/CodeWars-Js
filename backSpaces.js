function cleanString(s) {
let stack = []
for(let w of s ){
  if(w === "#"){
    stack.pop()
  }else{
    stack.push(w)
  }
}
return stack.join("")


}
