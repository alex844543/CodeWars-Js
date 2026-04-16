function seven(m) {

let res = []
let count =  0 ; 
  let str = m.toString()
  
  while(str.length > 2){
    let firstPart = str.slice(0,-1)
    let last = str.slice(-1)
    let mmm = Number(firstPart) - Number(2*last)
    str = mmm.toString()
    count++
  }
  
  let final = Number(str)
  res.push(final)
  res.push(count)

return res

}
