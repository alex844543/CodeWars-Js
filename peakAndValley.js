function peakAndValley(arr) {

  let result = []
  
  for(let i = 3 ; i <= arr.length-4 ; i++){
    if(arr[i] > arr[i-3] && (arr[i] > arr[i -2] && arr[i] > arr[i-1])&&
       (arr[i] > arr[i+1] && arr[i] > arr[i +2] && arr[i] > arr[i+3])  ){
       result.push(arr[i])
       }else if((arr[i] < arr[i-3] && (arr[i] < arr[i -2] && arr[i] < arr[i-1]))&&
       (arr[i] < arr[i+1] && (arr[i] < arr[i +2] && arr[i] < arr[i+3]))  ){
       result.push(arr[i])
       }
  }
  
  return result;
}
