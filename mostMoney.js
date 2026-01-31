function mostMoney(students) {
if(students.length === 1){
  return students[0].name
}
  
  let maxMoney = 0 ;
  let richestName = "";
  let allSame = true
  
  const firstTotal = 
      students[0].fives * 5 +
            students[0].tens * 10 +
      students[0].twenties *20 
        
        for(let s of students){
          let total = s.fives*5+s.tens*10+s.twenties*20;
          
          if(total !== firstTotal){
              allSame = false
          }
          
          if(total > maxMoney){
            maxMoney = total;
            richestName = s.name
          }
          
          
        }
  
  return allSame ? 'all' : richestName

}
