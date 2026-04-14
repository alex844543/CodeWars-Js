function playPass(s, n) {
  
  let spitt = s.split(" ");
  let result = []

for(let i = 0 ; i < spitt.length ; i++){
   spitt[i] = spitt[i].split("")
  for(let j = 0 ; j<spitt[i].length;j++){
    let word = spitt[i][j]
    if(word >= '0' && word <= '9'){
      let num = Number(word)
      num = 9 - num
      spitt[i][j] = String(num)
      continue
    }
    
    if(word >='A' && word <='Z'){
    let code = word.charCodeAt(0) + n
          if (code > 90) code = 65 + (code - 91)

    let newWord = String.fromCharCode(code)
    spitt[i][j] = newWord}

  }
          spitt[i] = spitt[i].join("")  

}
  
  result = spitt.join(" ")
    result = result.split("")

  
  for(let i = 0 ; i < result.length ; i++){
      if(result[i] === " ") continue
     if (i % 2 !== 0) {
  result[i] = result[i].toLowerCase()
} else {
  result[i] = result[i].toUpperCase()
}
  }
  
let final = result.reverse().join("")  
  return final

}
