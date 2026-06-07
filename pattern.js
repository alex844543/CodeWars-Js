function pattern(n){
 let str = ""
 let result =[]
 if(n === 1) return '1'
 
 for(let i = 1 ; i<=n ; i++){
   str+=String(i)
 }
  
  let start = 0
  
   for(let i = 1; i <= n; i++){
    result.push(str.slice(start))
    start += String(i).length
  }

  
  return result.join('\n')
  
  
}
