function letterCheck(arr) {

 for(let c of arr[1].toLowerCase()){
   if(!arr[0].toLowerCase().includes(c))
     return false
 }
  
  return true


}
