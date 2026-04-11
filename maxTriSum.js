function maxTriSum(numbers){

let count ={}

for(let n of numbers){
  if(!count[n]) count[n] = 1 ;
    
  
}
  
  let result =[]
  
  for(let key in count){
    result.push(Number(key))
  }
  
  return result.sort((a,b) => b-a).slice(0,3).reduce((a,b) => a + b,0)

}
