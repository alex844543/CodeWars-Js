function findUnique(numbers) {

let count = {
  
}

for(let c of numbers){
  if(!count[c]) count[c] = 1;
  else count[c]++
}
  
  for(let n in count){
    if(count[n] === 1)
      return Number(n)
  }


}
