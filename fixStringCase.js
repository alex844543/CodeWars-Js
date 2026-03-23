function solve(s){

let lowerCase = 0
let upperCase = 0

for(let i = 0 ; i < s.length ; i++){
if(s[i] === s[i].toLowerCase()){
  lowerCase++
}else if(s[i] === s[i].toUpperCase()){
  upperCase++
}
}
  
  if(lowerCase > upperCase){
    return s.toLowerCase()
  }else if(upperCase > lowerCase){
    return s.toUpperCase()
  }else if(lowerCase === upperCase){
    return s.toLowerCase()

  }


}
