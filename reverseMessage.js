function reverseMessage(str) { 

  let strr = str.split(" ")
  let result = ''
  
  for(let i = 0 ; i < strr.length ; i++){
        if(strr[i] === "") continue

    let arr = strr[i].toLowerCase().split("")
    
    let reversed = arr.reverse()
    reversed[0] = reversed[0].toUpperCase()
result += reversed.join("") + " "  
    
  }
  
  let ans = result.trim().split(" ").reverse().join(" ")
  
  return ans
}
