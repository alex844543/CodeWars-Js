// write the function isAnagram
var isAnagram = function(test, original) {
  
  if(test.length != original.length){
    return false
  }
  
  let sorted1 = test.toLowerCase().split('').sort().join("")
    let sorted2 = original.toLowerCase().split('').sort().join("")
 if(sorted1 === sorted2){
return true
 }else{
   return false
 }
  
  
};
