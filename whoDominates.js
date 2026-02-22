function dominator(arr) {
let count = {}

for(let n of arr){
  count[n] = (count[n]||0) + 1
}
  for(let key in count){
    if(count[key] > arr.length/2){
      return Number(key)
    }
  }
  return -1

}
