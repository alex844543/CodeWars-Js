function pigIt(str){
  
  let words = str.split(" ");
  
  let result = words.map( word => {
     if(word === '!' || word === '?' || word ===" . " || word === ","){
       return word;
     }
     let firstLetter = word[0];
    let rest =word.slice(1);
     return rest + firstLetter + 'ay';
  })
  
  return result.join(" ");
  
}
