function sc(room){
  
  let arr = []
  
let count = 0;
for(let i = 0 ; i < room.length ; i++){
  for(let j = 0 ; j < room[i].length ; j++){
    if(room[i][j] != " "){
      count++
            arr.push(room[i][j])

      room[i][j] = " "
    }
  }
}
  
  let odd = false;
  let even = false;
  let grid = 0;
  

  let n= arr.length 
  let size = 0
  while(size * size < n){
    size++
  }
  
  
  let pointer = 0 
  
  for(let i = 0 ; i < size ; i++){
    for(let j = 0 ; j <size ; j++){
      if(pointer < n){
      room[i][j] = arr[pointer]
      pointer++
    }}
  }
  
  return room
    
  
}
