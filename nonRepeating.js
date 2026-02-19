function firstNonRepeatingLetter(s) {

let lower = s.toLowerCase()
let count = {}

for(let ch of lower){
  count[ch] = (count[ch] || 0) + 1
}
  
  for(let i = 0; i<s.length;i++){
    if(count[lower[i]] === 1){
      return s[i]
    }
  }
  
  return ""


}
