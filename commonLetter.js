function replaceCommon(string, letter) {
let count = {}

for(let ch of string)
{
  if(ch !== " "){
    count[ch] = (count[ch] || 0) + 1
  }
}
  
  let max = 0
  let mostCommon = ""
  
  for(let ch of string){
    if(ch !== " " && count[ch] > max){
      max = count[ch]
      mostCommon = ch
    }
  }
  return string.split("")
  .map(ch => ch === mostCommon ? letter : ch)
  .join("")
  
  }
