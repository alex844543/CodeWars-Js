function calcType(a, b, res) {
let add = a +b
let mul = a*b
let div = a/b
let sub = a - b 

if(res === add){
  return "addition"
}else if(res === sub){
  return 'subtraction'
}else if(res === div){
  return 'division'
}else if(res === mul)
  return 'multiplication'



}
