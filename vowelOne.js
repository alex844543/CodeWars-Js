function vowelOne(s){

let result = []
let vowel = 'aeiou'

for(let c of s.toLowerCase()){
  if(vowel.includes(c)){
    result.push('1')
  }else {
    result.push("0")
  }
}
  
  return result.join("")


}
