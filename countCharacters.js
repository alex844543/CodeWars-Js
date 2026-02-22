function count(string) {
  if(string === ""){
return {}
  }
  
  let count = {}
  
  for(let n of string){
    count[n] = (count[n]||0) + 1
  }
  
  return count
  
}
