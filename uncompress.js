function uncompress(music) {
  let spittt = music.split(',')
  let answer = []
  
  for(let c of spittt){
    if(c.includes("*")){
      
      
      let numbers = c.split("*").map(Number)
      
      for(let i = 0; i < numbers[1]; i++){
        
        answer.push(numbers[0])
      }
    }
    else if(c.includes("/") && c.includes("-") && !c.startsWith("-")){
      let parts = c.split("/")
      let stepNum = Number(parts[1])
      let rangeStr = parts[0]
      
  
      let match = rangeStr.match(/^(-?\d+)-(-?\d+)$/)
      
             if(match){
        let start = Number(match[1])
        
        let end = Number(match[2])
        
        if(start <= end){
          for(let i = start; i <= end; i += stepNum){
            answer.push(i)
          }
        } else {
          for(let i = start; i >= end; i -= stepNum){
            answer.push(i)
          }
        }
      }
    }
    else if(c.includes("-") && !c.startsWith("-")){
      let match = c.match(/^(-?\d+)-(-?\d+)$/)
      
      if(match){
        let start = Number(match[1])
        
        let end = Number(match[2])
        
        if(start <= end){
          for(let i = start; i <= end; i++){
            answer.push(i)
          }
        } else {
          for(let i = start; i >= end; i--){
            answer.push(i)
            
          }
        }
        
      }
      
    }
    else{
      answer.push(Number(c))
    }
    
  }
  
  return answer
}
