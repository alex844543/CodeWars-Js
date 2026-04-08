function decode(number){

  let splitted = String(number).split('98');
  let result = [];

  let isText = true; 

  for(let char of splitted){
    if(char === "") continue;

    if (isText) {
      let word = "";
      
      for(let i = 0; i < char.length; i += 3){
        let code = Number(char.slice(i,i+3))
        word += String.fromCharCode(code - 4)
      }
      
      result.push(word);
    } else {
      result.push(parseInt(char,2))
    }

    isText = !isText
  }

  return result.join(", ")
}
