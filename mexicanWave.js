function wave(str){

if(str === ""){
  return []
}
  
  let result = []
  
  for(let i = 0;i<str.length;i++){
if(str[i] == " ") continue
    
    let left = str.slice(0,i)
    let upperCase = str[i].toUpperCase()
    let right = str.slice(i+1)
    
    result.push(left+upperCase+right)
  }
  
  return result


}
