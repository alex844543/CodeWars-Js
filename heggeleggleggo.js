function heggeleggleggo(word){

  let vowels = 'aeiou'
  let result =[]
  
  for(let c of word){
    if(!vowels.includes(c.toLowerCase()) && c !== ' '){
      result.push(c+'egg')
    }else{
      result.push(c)
    }
  }
  
  return result.join("")


}
