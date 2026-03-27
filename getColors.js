function getColors(colArr) {

  let arr = []

  for (let i = 0 ; i < colArr.length ; i++){
    let count = {Red: 0 , Green : 0 , Blue :0}

    for(let j = 0 ; j < colArr[i].length ; j++){
      let hex = colArr[i][j]

      let r = parseInt(hex.slice(0,2),16)
      let g = parseInt(hex.slice(2,4),16)
      let b = parseInt(hex.slice(4,6),16)

      if (r > g && r > b) count.Red++
      else if (g > r && g > b) count.Green++
      else count.Blue++
    }

    let major = 'Red'
    let minor = null   

    // Major
    if(count.Green > count[major]) major = 'Green'
    if(count.Blue > count[major]) major = 'Blue'

    // Minor
    for (let key in count) {
      if (key !== major && count[key] > 0) {
        if (minor === null || count[key] < count[minor]) {
          minor = key
        }
      }
    }

    arr.push(major + '+' + minor)
  }

  return arr.join(",")
}
