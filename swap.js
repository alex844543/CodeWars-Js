function swap (string) {
let result = ''
let vowel = 'aeiou'

for(let chae of string){
  if(vowel.includes(chae.toLowerCase())){
    result += chae.toUpperCase()
  }else 
    result+=chae
}
  
  return result

}
