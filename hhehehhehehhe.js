function spinWords(string){
let str = string.split(" ");
  let result = [];
  
  for(let a of str){
    if(a.length >= 5){
      a = a.split("").reverse().join("")
    }
    result.push(a)
  }
  
  return result.join(" ")



}
