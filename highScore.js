function high(x){
  
  let words = x.split(" ");
  let maxScore = 0;
  let bestWord = ""
  
  for(let word of words ){
    let score = 0;
    for(let ch of word){
      score+=ch.charCodeAt(0) - 96
    }
    
    if(score > maxScore){
      maxScore = score 
      bestWord = word
    }
  }
  
  return bestWord

}
