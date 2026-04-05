function vowelBack(s){
  let vowels = 'aiu'
  let result = []
 for(let i = 0; i<s.length ; i++){
   if(s[i] === 'c' || s[i] === 'o'){
     let code = s[i].charCodeAt(0)-1
     let newChar = String.fromCharCode(code)
     result.push(newChar)
     
   }
   
   else if(s[i] === 'd'){
     let code = s[i].charCodeAt(0) -3;
     let newChar = String.fromCharCode(code);
     result.push(newChar)
   } else if(s[i] === 'e'){
     let code = s[i].charCodeAt(0) - 4
     let newChar = String.fromCharCode(code);
     result.push(newChar)
   }
   
  else if(vowels.includes(s[i])){
     let code = s[i].charCodeAt(0) - 5
     if(code < 97) code+=26
     
     let newChar = String.fromCharCode(code)
     if(newChar === 'c' || newChar === 'o' || newChar === 'd' || newChar === 'e') newChar = s[i]
     result.push(newChar);
   }else if(s[i] !== 'c' && s[i] !== 'o' && s[i] !== 'd' && s[i] !== 'e' ) {
     let code = s[i].charCodeAt(0) + 9
     if(code > 122) code-=26;
     let newChar = String.fromCharCode(code)
          if(newChar === 'c' || newChar === 'o' || newChar === 'd' || newChar === 'e') newChar = s[i]

     result.push(newChar)
   }
   
 } 
  
  return result.join("")
  
  
}
