function sortArray(array) {
let odds = array.filter(n => n%2 !== 0).sort((a,b) => a-b)
let results = [];
  let oddIdx = 0
  
  for(let arr of array){
    if(arr%2 !==0){
      results.push(odds[oddIdx])
      oddIdx++
    }else{
      results.push(arr)
    }
  }
  
  return results

}
