function persistence(num) {
let count  = 0 
while(num > 9){
  let product = 1
  for(let digit of String(num)){
    product*=digit
  }
  num = product
  count++
}
  
  return count

}
