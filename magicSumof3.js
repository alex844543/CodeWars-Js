function magicSum(numbers) {

  let result = []
  
for(let arr of numbers){
  if(arr % 2 !== 0 && arr.toString().includes(3)){
result.push(arr)
  }
}
  
  return result.reduce((a,b) => a + b , 0)

}
