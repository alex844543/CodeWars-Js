function stairsIn20(s){
let total = 0
for(let c of s){
  for(let d of c){
    total+=d
  }
}
  
  return total*20

}
