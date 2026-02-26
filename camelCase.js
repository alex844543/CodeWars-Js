String.prototype.camelCase = function () {
  let str = this.split(" ") 
  let result = []

  for (let i = 0; i < str.length; i++) {
    if(str[i] === "" ) continue
    let first = str[i][0].toUpperCase()
    let rest = str[i].slice(1)
    let final = first + rest
    result.push(final)
  }

  return result.join("")
}
