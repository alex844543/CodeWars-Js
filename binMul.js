function binMul(m, n) {

let result = []

if(m === 0 || n === 0){
  return []
}

if( n > m){
  let temp = m
  m = n
  n = temp
}

while(m >0 ){
  if(m%2 === 0){
    m = Math.floor(m / 2)
    n = n * 2
  }else{
    result.push(n)
    m = Math.floor(m / 2)
    n*=2
  }
}
  
  return result.sort((a,b) => b-a)


}
