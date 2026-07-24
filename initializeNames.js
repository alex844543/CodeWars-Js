function initializeNames(name){

let spit  = name.split(" ")
  
let res = []

for(let i = 0 ; i < spit.length ; i++){
  if(i !== 0 && i !== spit.length-1){
    let n = spit[i][0]
    res.push(n+'.')
  }else{
    res.push(spit[i])
  }
}
  
  return res.join(" ")


}
