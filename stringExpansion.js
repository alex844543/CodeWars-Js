function stringExpansion(s) {

if(s === "") return ""
  let str = ''
      let num = 1

  for(let i = 0 ; i < s.length ; i++){
    
    if(s[i] >= "0" && s[i] <='9'){
      num = Number(s[i])
    }else{
 let ans = s[i].repeat(num)
 str+=ans
    }
  }
  
  return str
 
}
