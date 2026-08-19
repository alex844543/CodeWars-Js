function capMe(names) {
let res = []

for(let c of names){
  let b = c[0].toUpperCase()
  let w = c.slice(1).toLowerCase()
  
  res.push(b+w)
}
  
  
  return res


}
