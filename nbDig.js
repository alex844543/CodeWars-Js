function nbDig(n, d) {

  let count = 0
  
for(let i = 0 ; i<=n ;i++){
  let num = i**2
  let str = num.toString()
  let check = String(d)
for(let char of str){
  if(char === check) count++
}
  
  }
  
  return count;
  

}
