function solve(s) {
  let vowel = 'aeiou'
  let max = 0
  let currSum = 0

  for(let i = 0 ; i<s.length;i++){
    if(!vowel.includes(s[i])){
      currSum += s.charCodeAt(i) - 96
    }else{
      max = Math.max(max,currSum)
      currSum = 0
    }
  }
  
  max = Math.max(max,currSum)
  return max
  
};
