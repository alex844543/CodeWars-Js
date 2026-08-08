function toAcronym(inp){

let spt = inp.split(" ")
let res = ''

for(let a of spt){
  res+=a[0]
}

  return res.toUpperCase()

}
