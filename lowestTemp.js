function lowestTemp(t) {
  
  if(t === "") return null

let split = t.split(" ").map(Number)
  
  let min = Math.min(...split);
  
  return min

}
