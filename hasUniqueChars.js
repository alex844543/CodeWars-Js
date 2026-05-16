function hasUniqueChars(str){

  let count = {}
  
  
for(let i = 0 ; i <str.length ; i++){
 count[str[i]] = (count[str[i]] || 0) + 1
}
  
  for(let char in count){
  if(count[char] > 1)return false

  }
  
  return true
  

}
