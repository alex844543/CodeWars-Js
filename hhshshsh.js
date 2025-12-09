function sumTwoSmallestNumbers(numbers) {  

let sorted = numbers.sort((a,b)=> a-b)

let sum = sorted[0] + sorted[1];
  
  return sum

}
