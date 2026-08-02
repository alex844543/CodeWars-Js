function reverseWords(str) {

let spt = str.split(" ")
let arr = []

for(let c of spt){
  
  let a  = c.split('')
  a = a.reverse().join("")
  arr.push(a)
  
  
  
}
  
  return arr.join(' ')
  

}
