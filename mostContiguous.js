function sortStringsByVowels(strings){
const vowels  = 'aeiouAEIOU';
  
  function longest (str){
    let max = 0 
    let count = 0 
     for(let char of str){
       if(vowels.includes(char)){
         count++
         max = Math.max(max,count)
       }else{
         count = 0
       }
     }
    
    return max
  }
  return strings.sort((a,b) => longest(b) - longest(a))
}
