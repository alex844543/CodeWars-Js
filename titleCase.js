function titleCase(title, minorWords) {
  if(!title) return ""
  let words = title.toLowerCase().split(" ")
 
  let minors = minorWords ? minorWords.toLowerCase().split(" "):[]
  
  let result = []
  for(let i = 0 ; i<words.length;i++){
    if(i === 0){
      result.push(words[i][0].toUpperCase() + words[i].slice(1))
    } else if(minors.includes(words[i])){
      result.push(words[i])
    }else{
            result.push(words[i][0].toUpperCase() + words[i].slice(1))

    }
  }
  
  return result.join(" ")

  }
