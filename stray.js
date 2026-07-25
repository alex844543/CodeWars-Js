function stray(numbers) {

let count = {}

for(let c of numbers){
  count[c] = (count[c]|| 0) + 1
}
  
  for(let k in count){
    if(count[k] ===1)
      return Number(k)
  }

}
