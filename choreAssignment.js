function choreAssignment(chores) {
    chores.sort((a, b) => a - b);

let res = []

for(let i = 0 ; i <chores.length /2 ; i++){
  let a = chores[i]
  let b = chores[chores.length - (i+1)]
  res.push(a+b)
}
  
  return res.sort((a,b) => a-b)

}
