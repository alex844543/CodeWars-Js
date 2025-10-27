function zebulansNightmare(functionName) {

  let spitWord = functionName.split('_');
  let firST= spitWord[0];
  
  let caTa = spitWord.slice(1).map(word => word[0].toUpperCase()+ word.slice(1));
  
  let result = firST + caTa.join('')
  return result
 
}
