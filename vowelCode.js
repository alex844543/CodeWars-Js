function encode(string) {
  
  let code = {
    a : '1',
    e : '2',
    i : '3',
    o: '4',
    u : '5' 
  }
  
  let result = ''
  
  for(let char of string ){
    if(code[char] !== undefined){
      result+=code[char]
    }else{
      result+=char
    }
  }
  
  return result
  
  
}

function decode(string) {
  
  let code = {
    1 : 'a',
    2 : 'e',
    3 : 'i',
    4 : 'o',
    u : 'u'
  }
  
  let result = ''
  for(let char of string){
    if(code[char] !== undefined ){
      result+=code[char]
    }else{
      result+=char
    }
  }
  
  return result
}
