function leastLarger(a,i) {
let res = []
let n = a[i]

for(let c of a){
  if(c > n) res.push(c)
}


let min = Math.min(...res)

return a.indexOf(min)



}
