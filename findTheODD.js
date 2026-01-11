function findOdd(A) {
  let count = {};
  
  for (let num of A){
    if(count[num]=== undefined){
      count[num]= 1;
    }else{
      count[num]++
    }
  };
  
  for(let key in count){
    if(count[key]%2 ===1){
      return Number(key)
    }
    
  }
  
  
}
