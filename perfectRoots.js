function perfectRoots(n) {

let a1 = Math.pow(n,1/2)
let a2 = Math.pow(n,1/4)
let a3 = Math.pow(n,1/8)

if(!Number.isInteger(a1) || 
   !Number.isInteger(a2) || 
   !Number.isInteger(a3))
  return false
  
  return true




}
