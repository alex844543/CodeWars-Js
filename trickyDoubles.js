function trickyDoubles(n){
n = String(n)
if(n.length % 2 === 0){
  let e = n.length/2
  let f = n.slice(0,e)
  let l = n.slice(e) 
 if(f === l){
   return Number(n)
 }
}
    return Number(n)*2


}
