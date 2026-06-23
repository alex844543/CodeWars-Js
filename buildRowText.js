function buildRowText(index, character) {

let arr = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
arr[index] = character
  
  return '|' + arr.join("|") + '|'


}
