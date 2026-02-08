function duplicateCount(text){

text = text.toLowerCase();
  
  let count = {};
  
  for(let ch of text ){
    count[ch] = (count[ch] || 0) + 1
  }
  
  let duplicates  = 0 ;
  
  for(let keys in count){
if(count[keys] > 1){
  duplicates++
}
  }
  
  return duplicates

}
