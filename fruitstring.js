//I hope you like the solutions!!!

function calculate(string) {
let words = string.split(' ')

let operator;
  if(words.includes('gains')){
   operator = 'gains'
  }else if(words.includes('loses')){
    operator = 'loses'
  }else{
    return 'No Valid Operator is Found '
  }
  
  const numbers =[];
  for(let word of words){
    if (!isNaN(word)){
      numbers.push(Number(word))
    }
  }
 if (numbers.length < 2) {
    return "Not enough numbers to calculate";
  }

  let result;
  if (operator === "gains") {
    result = numbers[0] + numbers[1];
  } else if (operator === "loses") {
    result = numbers[0] - numbers[1];
  }

  return result;
}
