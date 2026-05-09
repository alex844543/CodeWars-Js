function mean(lst){

let result = []
let num = []
let str =''
let count = 0

for(let i = 0 ; i < lst.length ; i++){
  let c = lst[i]
  
if(c >= '0' && c<='9'){
  num.push(c)
  count++
}else{
  str+=c
}
}
  
num = num.map(Number).reduce((a,b) => a+b , 0)
  num = num/count
  
  result[0] = num
  result[1] = str
    return result


}
