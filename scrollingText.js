function scrollingText(text){

let upText = text.toUpperCase();
  let result = [];
  
  for(let i = 0 ; i<upText.length ; i++){
    let roated = upText.slice(i) + upText.slice(0,i)
    result.push(roated)
  }
  
  return result

}
