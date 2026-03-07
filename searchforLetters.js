function change(string){

  string = string.toLowerCase()
  let result =  ""
  for(let i = 97 ; i<=122;i++){
    let letter = String.fromCharCode(i)
    
    if(string.includes(letter)){
      result+="1"
    }else{
      result+='0'
    }
  }
  
  return result
  
  
}
