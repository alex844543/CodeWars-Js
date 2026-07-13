function doubleChar(str) {

let res = []
  

for(let c of str){
  let n = c.repeat(2)
  res.push(n)
}
  
  return res.join("")


}
