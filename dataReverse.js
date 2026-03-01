function dataReverse(data) {

let blocks = []

for(let i = 0 ; i<data.length;i+=8){
  let result = data.slice(i,i+8)
  blocks.push(result)
}

  blocks.reverse()
  
  return blocks.flat()
  
}
