function findSecretMessage(paragraph) {
let map = {
  
}
let result = []

let small = paragraph.toLowerCase()
let splitted = small.replace(/[^\w\s]/g, "").split(" ")
for(let i = 0 ; i < splitted.length ; i++){
  let word = splitted[i]
  
  map[word] = (map[word] || 0) + 1;
  if(map[word] === 2) result.push(word)
}
  
  return result.join(" ");
  
  
}
