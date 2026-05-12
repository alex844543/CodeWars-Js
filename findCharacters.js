function findCharacters(matrix){

  let split = matrix.split("\n")
  
  let count = {}

  
  
  for(let arr of split){
    for(let c of arr){
       count[c]  = (count[c] || 0) + 1;
    }
  }
  
let order = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let arrr = Object.keys(count).sort((a,b)=>
  count[a] - count[b] || order.indexOf(a) - order.indexOf(b)
)
let min = count[arrr[0]]
let result =''

for(let c of arrr){
  if(count[c] == min) 
    result+=c
}
  
  return result
  
}
