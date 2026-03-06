function addedChar(s1, s2){

let count = {}
for(let ch of s2){
  count[ch] = (count[ch] || 0) + 1
}
  
  for(let ch of s1){
    count[ch] = count[ch] -1
  }
  
  for(let keys in count){
    if(count[keys] === 3){
      return keys 
    }
  }

}
