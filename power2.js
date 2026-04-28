// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = n => {
  
  const binary = n.toString(2).split("").map(Number);

  let result = [];
  
  for(let i = binary.length -1 ; i >=0 ; i--){
    let power = 1;
    
    if(binary[i] === 1){
      power = 2**(binary.length - i - 1)
                      result.push(power)


    }

      
      else {
        continue;
      }
    
    
  }
  
  return result.sort((a,b) => a-b)
  


};
