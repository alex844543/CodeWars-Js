function uniqueSum(lst){
  
  if(lst.length === 0) return null

let second =[]

for(let c of lst){
  if(!second.includes(c)){
    second.push(c)
  }
}

  return second.reduce((a,b) => a+b,0)
  
}
