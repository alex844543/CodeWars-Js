function isOrthogonal(u,v) {

let sum = 0

for(let i = 0 ; i<u.length;i++){
  sum+=u[i]*v[i]
}
  
  return sum === 0


}
