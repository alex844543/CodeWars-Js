function diagonal(n, p) {
let row = n + 1;
  let col = p+1;
  
  let result =1;
  
for(let i = 0 ; i < col ; i++){
  result = result * (row-i);
  result = result / (i+1)
}
  
  return result


}
