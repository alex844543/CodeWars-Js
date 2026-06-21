const createSequence = (regex) => {
let result = []

for(let i = 0 ; i<=127; i++){
 
 
  let char = String.fromCharCode(i)
  
  if(regex.test(char)){
    result.push(char)
  }
}
  
  return result.join("")

}
