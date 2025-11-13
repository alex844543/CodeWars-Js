function isItBugged(code){
  
   const pattern = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;

 return pattern.test(code);
}
