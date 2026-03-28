function decrypt(code) {

  let blocks = code.split(" ")
  let result = ""

  for (let block of blocks) {

    let sum = 0

    for (let ch of block) {
      if (ch >= '0' && ch <= '9') {
        sum += Number(ch)
      }
    }

    sum = sum % 27

    if (sum === 0) {
      result += " "
    } else {
      result += String.fromCharCode(96 + sum)
    }
  }

  return result
}
