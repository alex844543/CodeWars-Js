function firstNonRepeated(s) {

let count = {}

for(let char of s){
  count[char] = (count[char] || 0) + 1
}
  
  for(let key in count){
    if(count[key] === 1)
      return key
  }
  
  return null


}
