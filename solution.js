function solution(str){
	let res = []
  let splitt = str.split("")
  
  for(let i = 0 ; i < splitt.length ; i++){
    let temp = []
    let word = splitt[i]
    let code = word.charCodeAt(0)
    
   while(i < splitt.length -1){
     let next = splitt[i + 1]
    let nextCode = next.charCodeAt(0)
      if(code + 1 === nextCode){
      temp.push(word)
        i++
        word = splitt[i]
        code = word.charCodeAt(0)
    }else break;
   }
    if(temp.length > 0){
            temp.push(word)           

    temp = temp.reverse()
      res.push(...temp)
      } else
    
    res.push(word)
    
    
    
    
  }
  
  return res.join("")
   
} 
