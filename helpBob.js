function countLettersAndDigits(input) {
let result = []
for(let char of input){
  if((char >= 'A' && char <='Z') ||
    (char >= 'a' && char <='z') || 
    (char >= '0' && char <='9')){
  result.push(char) }
  }
  
    return result.length

}
  
