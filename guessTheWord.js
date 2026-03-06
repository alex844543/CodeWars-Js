function countCorrectCharacters(correctWord, guess){

if(correctWord.length !== guess.length){
  throw new Error("Words must have same length")
}
  
  let count = 0 
  for(let i = 0 ; i<correctWord.length;i++){
    if(correctWord[i] === guess[i]){
      count++
    }
  }
  
  return count 


}
