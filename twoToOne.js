function longest(s1, s2) {

let combine = s1 + s2

let count = {}
let result = ''

for(let char of combine){
  if (count[char] < 1 || char[char] === undefined){
 count[char] = 1 
}
  

}
  for(let keys in count){
    result+=keys
  }
  
   return  result.split("").sort().join("")

  
  }
