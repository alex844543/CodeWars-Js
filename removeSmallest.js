function removeSmallest(numbers) {

let smallest  = Math.min(...numbers)
let index = numbers.indexOf(smallest)

let result = numbers.filter((_,i) => i !== index)
  
  return result



}
