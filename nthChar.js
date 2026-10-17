function nthChar(words){

let str = []

for(let i  = 0  ; i <words.length ; i++){
  for(let j = 0 ; j < words[i].length ; j++){
    if(str[i] === str[j])
    str.push(words[i][j])
  }
}
  
  return str.join("")


}
