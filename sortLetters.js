function sortLetters() {
let vowel = 'AEIOU'
  let result = [[], []]
for(let c of arguments){
for(let l of String(c)){
  l = l.toUpperCase()
  
  if(l >='A' && l <='Z'){
    if(vowel.includes(l))
    result[0].push(l)
    
  else{
  result[1].push(l)
}
    }
}
}
  return result
  
}
