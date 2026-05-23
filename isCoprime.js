function isCoprime(x, y) {

let xp =[]
let yp =[]

for(let i = 1 ; i<=x ;i++){
if(x % i === 0){
  xp.push(i)
}
  }
  for(let i = 1 ; i<=y ;i++){
if(y % i === 0){
  yp.push(i)
}
    }
  
  let common = 0
  
  for(let c of xp){
    if(yp.includes(c)){
      common = c
    }
  }
  
  return common === 1 ? true  : false
  
  
}
