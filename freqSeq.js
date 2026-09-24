function freqSeq(str, sep) {

let count  = {
  
}

for(let c of str){
    count[c] = (count[c] || 0) + 1
}
  
  let res = []
  
  for (let c of str) {
    res.push(count[c])
  }
  
  return res.join(sep)


}
