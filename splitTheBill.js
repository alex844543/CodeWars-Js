function splitTheBill(x) {
let total = 0
let people = 0

for(let key in x){
  total+=x[key]
  people++
}
  
let toSpd = total  / people


for(let key in x){
      x[key] = Number((x[key] - toSpd).toFixed(2))

}
  
  return x
}
