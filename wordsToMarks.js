function wordsToMarks(string){
let aa = 0
for(let c of string){
  let n = c.charCodeAt(0) - 96
  aa+=n
}

  return aa

}
