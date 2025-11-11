function isSortedAndHow(array) {
let a = [...array].sort((a,b) => a-b);
  let d =  [...array].sort((a,b) => b-a);
  
  
  if(array.toString() === a.toString() ){
    return "yes, ascending"
  }else if(array.toString() === d.toString()){
    return "yes, descending"
  }else{
    return "no"
  }

}
