function isLeapYear(duration, year) {

let decimal = duration - Math.floor(duration)
let count =0 

  if (decimal === 0) return false;

while(decimal !== 1){
  decimal+=decimal
  count++
}
  
  return year % (2 ** count) === 0;



}
