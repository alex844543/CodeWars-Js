function openOrSenior(data){
let result =  [];
for(let pair of data){
  let age = pair[0]
  let handiCAP = pair[1]
  
  if(age >= 55 && handiCAP > 7){
    result.push('Senior')
  }else { 
  result.push('Open')
  }
    
}
  
  return result

}
