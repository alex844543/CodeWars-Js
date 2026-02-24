function toWeirdCase(string){
  let words = string.split(" ")   
  let final = []

  for(let word of words){
    let newWord = ""

    for(let i = 0; i < word.length; i++){
      if(i % 2 === 0){
        newWord += word[i].toUpperCase()
      } else {
        newWord += word[i].toLowerCase()
      }
    }

    final.push(newWord)
  }

  return final.join(" ")
}
