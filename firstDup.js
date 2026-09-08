function firstDup(string) {

for(let i = 0 ; i < string.length - 1 ; i++){
  let char = string[i]
  
  let sp = string.slice(i+1)
  if(sp.includes(char)){
    return char
  }
}
  
  return undefined


}
