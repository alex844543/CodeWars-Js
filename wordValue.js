function wordValue(words) {
let res = []

for(let i = 0 ; i < words.length;i++){
  let total = 0
  for(let j = 0 ; j < words[i].length;j++){
    
    let word  =words[i][j]
    if(word !==" "){
      let code = word.charCodeAt(0) - 96;
      total+=code
    }
  }
  
  res.push(total)
}

  return res.map((n,i) => n*(i+1))


}
