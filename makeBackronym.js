//preload variable: dict

var makeBackronym = function(string){

  let letters = string.split("")
  let words = [];
  
  for(letter of letters){
    let uppercase = letter.toUpperCase();
    
    let word = dict[uppercase]
    
    words+=word
    
  }
  
  return words.join(" ");
};
