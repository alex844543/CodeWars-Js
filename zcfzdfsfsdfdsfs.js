function alphabetPosition(text) {
let result = [];
  
  text = text.toLowerCase();
  
  for(let char of text){
if(char >= 'a' && char <="z"){
  let position = char.charCodeAt(0) - 96
  result.push(position)
}
  }
  
  return result.join(" ")



}
