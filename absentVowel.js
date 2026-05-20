function absentVowel(x){

  let index = {
    a: 0 , 
    e : 1,
    i : 2 ,
    o : 3 ,
    u : 4
  }
  
  let count = {
        a: 0 , 
    e : 0,
    i : 0 ,
    o : 0 ,
    u : 0
}
  
  let vowels = 'aeiou'
  
  for(let c of x){
    if(vowels.includes(c)){
      count[c] = (count[c] || 0) + 1; 
    }
  }
  
  
  
  for(let key in count){
    if(count[key] === 0){
      return index[key]
    }
  }
  
  
  
}
