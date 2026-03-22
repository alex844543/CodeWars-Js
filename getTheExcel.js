function getColumnTitle(num) {
  
   if (num === undefined || typeof num !== "number" || !Number.isInteger(num)) {
    throw new TypeError("Invalid input");
  }
  if (num < 1) {
    throw new RangeError("IndexError");
  }

let result = ""

while(num > 0){
  num--
  let remainder = num % 26
  result = String.fromCharCode(65 + remainder) + result 
  num = Math.floor(num / 26)
}
  
  return result

}
