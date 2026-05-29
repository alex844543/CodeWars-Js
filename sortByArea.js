function sortByArea(array) {
let result = []

for(let i = 0 ; i < array.length ; i++){
  if(Array.isArray(array[i])){
    let res = array[i][0] * array[i][1]
    result.push(res)
    
  }else{
    let res = Math.PI * array[i]**2
    result.push(res)
  }
}
  
  return result.sort((a,b) => a-b)


}
