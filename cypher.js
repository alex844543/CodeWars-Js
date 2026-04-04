function cypher(string) {

let stringgg = string.split("")
  
for (let i = 0; i<stringgg.length ; i++){
  let char = stringgg[i]
  if(char === 'I' || char === 'l'){
    stringgg[i] = '1'
  }else if(char === 'R' || char === 'z'){
     stringgg[i]  = '2'
  }else if(char === 'E' || char === 'e'){
     stringgg[i]  = '3'
  }else if(char === 'A' || char === 'a'){
     stringgg[i]  = '4'
  }else if(char === 'S' || char === 's'){
     stringgg[i]  = '5'
  }else if(char === 'G' || char === 'b'){
     stringgg[i]  = '6'
  }else if(char === 'T' || char === 't'){
     stringgg[i]  = '7'
  }else if(char === 'B' ){
     stringgg[i]  = '8'
  }else if( char === 'g'){
     stringgg[i]  = '9'
  }else if(char === 'O' || char === 'o'){
     stringgg[i]  = '0'
  }
}
  
  return stringgg.join("")

}
