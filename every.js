function every(arr, interval, start){

let result = [];

for(let i = start || 0 ; i < arr.length ; i+=interval || 1){
  result.push(arr[i])
}
  
  return result

}
