function quicksum(packet){
if(!packet) return 0;
  
  if(packet.trim()==="") return 0;
  
  let total = 0;
  let position = 1;
  
  for(let char of packet){
    if(char !==" " && (char <'A' || char > 'Z')){
      return 0 ; 
    }
    
    let value = 0;
    if(char !== ' '){
            value = char.charCodeAt(0) - 64; // A=1, B=2 ... Z=26

      
    }
    total+=position*value;
    position++
  }
  return total


}
