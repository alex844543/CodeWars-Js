function minValue(values){
let result =[]
values = values.sort((a,b) => a-b)

for(let c of values){
  if(!result.includes(c))
    result.push(c)
  
}
  
  return Number(result.join(""))


}
