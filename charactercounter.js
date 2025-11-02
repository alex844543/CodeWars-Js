function validateWord(word) {
  word = word.toLowerCase();  
  let counts = {};            
  for (let ch of word) {
    if (counts[ch]) {
      counts[ch]++;           
    } else {
      counts[ch] = 1;          
    }
  }

  
  let values = Object.values(counts);
  let first = values[0];

  for (let v of values) {
    if (v !== first) {
      return false;           
    }
  }

  return true;                 
}
