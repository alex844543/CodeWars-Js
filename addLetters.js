function addLetters(...letters) {
  let sum = 0;

  for (let c of letters) {
    
    let s = c.charCodeAt(0) - 96;
    sum += s;
  }

  if (sum === 0) return 'z';

  sum = sum % 26;
  
  if (sum === 0) sum = 26;

  return String.fromCharCode(sum + 96);
}
