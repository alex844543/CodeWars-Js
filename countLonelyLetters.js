function countLonelyLetters(text) {

let count = {}

  
  if(typeof text !== 'string'){
    return 0
  }
  
  text = text.toLowerCase()


for(let char of text){
  
  if(char < 'a' || char > 'z') continue;
  if(!count[char]){
    count[char] = 1;
  }else {
count[char]++
  }
}
  let lonely =0;
  
  for(let keys in count){
  let neighbour1 = String.fromCharCode(keys.charCodeAt(0) - 1);
let neighbour2 = String.fromCharCode(keys.charCodeAt(0) + 1);
    if(count[keys] === 1 && count[neighbour1] === undefined && count[neighbour2] === undefined ){
      lonely++
    }
  }
return lonely

}
