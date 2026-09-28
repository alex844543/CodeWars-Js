function decodePass( passArr, bin ){

let ar = bin.split(" ").map(i => String.fromCharCode(parseInt(i,2))).join("")

for(let c of passArr){
if(c === ar){
  return c
}
}
  
  return false
  

}
