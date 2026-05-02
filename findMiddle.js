function findMiddle(str){
if (Array.isArray(str)) return -1
  if (typeof str !== 'string') return -1
  let mul  = [];
    str = String(str)

  let split = str.split("")
  let res = 0
  
  for(let i = 0 ; i < split.length ; i++){
    let char =  split[i];
    if(char >= '0' && char <= '9'){
      mul.push(Number(char))
    }
  }
  
    if(mul.length === 0 ) return -1

  
  let nul = mul.reduce((a,b) => a*b,1);
  
  
  let strr = nul.toString()
  let length = nul.toString().length
  
  if(length % 2 === 0 ){
    let middle = strr.slice(strr.length / 2 - 1, strr.length / 2 + 1);
    res+=Number(middle)

  }else if(length % 2 !==0){
    let middle =  Math.floor(length/2)
    let r = strr[middle]
    res+=Number(r)
    
  }
  
  return res
  
  
}
