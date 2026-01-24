function splitString(string) {
let lastIndex = {};
  for(let i = 0;i<string.length; i++){
    lastIndex[string[i]] = i;
  }
  
  let result = [];
  let start = 0;
  let end = 0;
  
  for(let i =0; i<string.length;i++){
    end = Math.max(end,lastIndex[string[i]])
    
    
    if(i === end){
      result.push(end-start+1);
      start = i+1
    }
  };
  
  return result



}
