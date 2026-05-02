function addAll(numbers) {

let res = 0;
  
  while(numbers.length > 1){
     numbers = numbers.sort((a,b)=> a-b);
  
    
    let first = numbers.shift();
    let sec = numbers.shift();

  
  let min = first + sec;
    
    res+=min
  

    
    numbers.push(min)
    
  }
  
  return res
}
