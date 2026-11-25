function equableTriangle(a,b,c) {
  let s = (a + b + c) / 2

  let ar = Math.sqrt(s * (s-a) * (s-b) * (s-c))
  let p  = a + b + c
  
  if(ar === p)
return true 
  else return false


}
