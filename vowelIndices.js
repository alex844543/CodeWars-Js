function vowelIndices(word){

  let vowels = 'aeiouy'
  let result =[]
  
  for(let i = 0 ;i <word.length ; i++){
    if(vowels.includes(word[i].toLowerCase())){
      result.push(i+1)
    }
  }
  
  return result
  


}
