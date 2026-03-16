function multiplicationTable(size) {
let table = []

for(let i = 1 ; i <=size ; i++){
  let result = []
  
  for(let j =1 ; j<=size;j++){
    result.push(i * j)
  }
  
  table.push(result)
}
  
  return table



}
