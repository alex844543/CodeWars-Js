function grabscrab(anagram, dictionary) {

  let sorted = anagram.split("").sort().join('');
  
  let result = [];
  
  for(let word of dictionary){
if(word.split('').sort().join('') === sorted)
  result.push(word)
  }
  
  return result
  
  
  
}
