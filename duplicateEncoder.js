function duplicateEncode(word){

  word = word.toLowerCase()
  
  let count = {};
  for(let char of word){
    count[char] = (count[char] || 0) + 1
  }
  
  let result = "";
  
  for(let char of word){
    if(count[char] === 1){
      result+="("
    }else{
      result+=")"
    }
  }
  
  return result 
}
