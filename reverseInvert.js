function reverseInvert(array) {
  let res = []

  for (let c of array) {
    if (Number.isInteger(c)) {
      
   let n = Number(String(Math.abs(c)).split('').reverse().join(''))
      
     res.push(c < 0 ? n : -n)
    }
  }

  return res
}
