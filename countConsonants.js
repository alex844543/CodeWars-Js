function countConsonants(str) {

  let count = {
    
  }
  
  let vowel = 'aeiou'
  
  for(let i = 0 ; i < str.length ; i++){
    let c = str[i].toLowerCase()
    
    if(c >= 'a' && c <= 'z' && !vowel.includes(c) && !count[c]){
      count[c] = 1;
    }
  }
  
  let total = 0 
  
  for(let keys in count){
    total+=count[keys]
  }
  
  return total
}
