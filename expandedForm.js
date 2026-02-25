function expandedForm(num) {
let str = String(num)
let result = []
for(let i = 0;i<str.length;i++){
  
  if(str[i] !== "0"){
  let zeros = str.slice(i+1)
  let numm = str[i]+"0".repeat(zeros.length)
  result.push(numm)
    }
}
  return result.join(" + ")

}
