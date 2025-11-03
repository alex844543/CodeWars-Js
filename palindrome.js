var palindromeChainLength = function(n) {
  
  let steps =0;
  
  function isPalindrome (num){
let reversed = Number(num.toString().split('').reverse().join(''));
    
    if(n === reversed){
      return true
    }else{
      return false
    }
  }
  
  while(!isPalindrome(n)){
    
    let reverse = Number(n.toString().split('').reverse().join(''));
    n+=reverse;
    steps++;
    
    
  }
  
  
  
  
  return steps;
};
