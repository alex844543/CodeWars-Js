function eliminateUnsetBits(number) {

let str =''

for(let c of number){
  if(c === '1')
    str+=c
}
  
  return str === "" ? 0 : parseInt(str,2)

}
