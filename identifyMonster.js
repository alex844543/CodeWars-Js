function identifyMonster(observedWeaknesses, bestiary) {

  let result = []
  
  let count = {}
  
for(let char of observedWeaknesses){
for(let keys in bestiary){
  for(let ele of bestiary[keys]){
    if(ele === char) {
      count[keys] = (count[keys] || 0) + 1
    }
  
  }
  
}

}
  
  for(let keys in count){
    if(count[keys] === observedWeaknesses.length ){
      result.push(keys)
    }
  }
  
if(result.length > 0) return result[0]
  else if(result.length === 0) return 'Unknown monster'

}
