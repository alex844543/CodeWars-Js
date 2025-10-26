function repeats(arr){
let sum = 0 ;
  
  for(let i = 0; i<arr.length;i++){
    
    let num  = arr[i];
    let count = 0;
    
    for(let j  = 0 ; j<arr.length ; j++){
      if(num === arr[j]){
        count++;
      }
    
    }
      if(count === 1){
        sum+=num
      }
    
    
    
  }
    return sum;



};
