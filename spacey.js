function spacey(array) {

let word = array[0]

let result = [word]

for(let i = 1 ; i < array.length; i++){
  word+=array[i]
  result.push(word)
}
  
  return result 

}
