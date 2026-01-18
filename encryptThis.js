var encryptThis = function(text) {
  
  if(!text) return ""
  
  let split = text.split(" ")
  
  let result = split.map(word => {
    if(word.length === 1) return word.charCodeAt(0);
    if(word.length === 2) return word[0].charCodeAt(0) + word[1]
    
    
    let first = word[0].charCodeAt(0);
    let second = word[word.length-1];
    let middle = word.slice(2,-1);
    let last = word[1];
    
    return first + second  + middle + last
    
    
  })
  
  return result.join(" ")
  
}
