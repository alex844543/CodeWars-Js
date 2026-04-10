function processData(data){


let result = []

for(let i = 0 ; i<data.length ; i++){
  let dta = data[i];
  let res = dta[0] - dta[1]
  result.push(res)

  
}
  
  return result.reduce((a,b) => a * b , 1)


}
