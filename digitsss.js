function digits(n) {
  let res = []
  let arr = n.toString().split("").map(Number)
  
  
  for(let i = 0; i < arr.length ; i++ ){
    let s = 0
   for(let j = i + 1 ; j < arr.length ; j++ ){
     s = arr[i] + arr[j]
     res.push(s)
     
   }
  }
  
  
  return res
}
