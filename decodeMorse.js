decodeMorse = function(morseCode){
let trim  = morseCode.trim()
let words = trim.split("   ")
let result  = []
for(let word of words){
  let decodeWord = ''
  let split = word.split(" ")
  for(let char of split){
    decodeWord+=MORSE_CODE[char]
  }
  
  result.push(decodeWord)
}
  
 return result.join(" ")


}
