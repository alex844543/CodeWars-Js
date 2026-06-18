function mostFrequentItemCount(collection) {

if(collection.length === 0){
  return 0
}
  
  let count = {}
  
  for(let c of collection ){
    count[c] = (count[c] || 0) + 1
  }
  
  let arr = Object.values(count)
  
  return Math.max(...arr)

}
