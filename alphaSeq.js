function alphaSeq (str) {
  let arr = []
for(let c of str){
  let up = c.toUpperCase()
  let position =  up.charCodeAt(0) - 64
  
  for(let i = 1 ; i < position ; i++){
    up += c.toLowerCase()
    
  }
  arr.push(up)
  
}
  
  return arr.sort().join(",")

}
