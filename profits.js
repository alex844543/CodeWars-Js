function minMax(arr){

     let result = []

if(arr.length == 1){
  result.push(arr[0],arr[0])
 
}
  
  if(arr.length > 1){
  let min = Math.min(...arr)
  let max  = Math.max(...arr)
  
  result.push(min , max);
  
    }
    return result


}
