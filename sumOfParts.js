function partsSums(ls) {

let result = [];
  let total = 0;
for(let n of ls){
  total+=n
}
  
  for(let f of ls){
    result.push(total)
    total-=f
  }
  result.push(0)
 return result
}
