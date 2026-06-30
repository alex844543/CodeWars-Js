function pigLatin(string){

let vowel = 'aeiou'
string = string.toLowerCase();

  if (!/^[a-z]+$/.test(string)) {
  return null;
}
  
  let firstVol = -1

for(let i = 0 ; i < string.length ;i++){
  if(vowel.includes(string[i])){
   firstVol = i
    break
  }
}
  
  if(firstVol === 0){
    return string + 'way'
  }
  
else if(firstVol == -1)
  return string + 'ay'

return string.slice(firstVol) + string.slice(0,firstVol) + 'ay'

}
