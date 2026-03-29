function decipherThis(str) {

let result = []
let splitt = str.split(" ")

for(let i = 0 ; i < splitt.length ; i++){
 let num = splitt[i].match(/\d+/g)
 let n  = String.fromCharCode(Number(num))
   let newS = splitt[i].replace(num , n)
let splitt2 = newS.split("")
  let temp = splitt2[1]
  splitt2[1] = splitt2[splitt2.length-1]
  splitt2[splitt2.length-1] = temp
  
  result.push(splitt2.join(""))

}
  
  return result.join(" ")
}
