function wheatFromChaff(values) {

  let arr = [...values]
  
let l = 0
let r = values.length-1

while(l < r){
  if(arr[l] > 0 && arr[r] < 0){
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
  }
  
  if(arr[l] < 0 ) l++;
  if(arr[r] > 0) r--;
}
  return arr
  
}
