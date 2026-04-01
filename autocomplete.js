function autocomplete(input, dictionary){
  let newStr = ''
  let inTY = input.toLowerCase()
  for(let char of inTY){
    if(char >= 'a' && char <='z'){
      newStr+=char
    }
    }
        if(newStr === "") return []

    
    let result = []
    for(let dih of dictionary ){
    if(dih.toLowerCase().slice(0,newStr.length) === newStr){
      result.push(dih)
    }
      }
    
    
    
  return  result.length > 5 ? result.slice(0,5) : result
    
  
  
}
