function highestRank(arr){
//yooo
let map = {}

for(let a of arr){
map[a] = (map[a] || 0) + 1
}
  let max = 0
  let result = 0 
  
  
  for(let a in map){
    if(map[a] > max){
      max = map[a]
      result = Number(a)
    }else if(map[a] === max && Number(a) > result){
      result = Number(a)
}
  }
  
  return result 

}
