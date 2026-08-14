function binRota(arr){
let res = []
for(let i = 0 ;  i <arr.length ; i++){
  if( i % 2 === 0){
    for(let j = 0 ; j<arr[i].length ; j++){
      res.push(arr[i][j])
    }
  }else {
    for(let j = arr[i].length -1 ; j >= 0 ; j--){
      res.push(arr[i][j])
    }
  }
}
  
  return res

}
