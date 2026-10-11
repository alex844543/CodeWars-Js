function consonantCount(str) {
  
  let vowel = 'aeiou'
  let n = 0 
  
  for(let c of str.toLowerCase() ){
    if(c >= 'a' && c <= 'z' && !vowel.includes(c))
      n+=1
  }
  
return n



}
