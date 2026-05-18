function isTuringEquation(s){

let [a,w] = s.split("+")
let [b,c] = w.split("=")

a = Number(a.split("").reverse().join(""))
  b = Number(b.split("").reverse().join(""))
c = Number(c.split("").reverse().join(""))
  if(a + b === c){
    return true
  }else return false


}
