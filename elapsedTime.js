function elapsedSeconds(startDate, endDate){
 //I AM Gonna To This In Proper and big format
  let start = startDate.getTime();
  let end =  endDate.getTime();
  
  let result = (end - start) / 1000
  
  return result
  
}
