function pyramid(n) {
let result = []
for(let i = 1 ; i<=n ; i++){
  
  let num = 1
  let repeated = String(num).repeat(i)
  let splt = repeated.split("").map(Number);
  
  result.push(splt)
}
  
  return result

}
