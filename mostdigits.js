function findLongest(array){
let num  =array[0]
  let max = String(array[0]).length;
  
  for(let i = 0; i<array.length;i++){
    let nume = array[i]
    let current = String(nume).length;
    
    if(current > max ){
      max = current ;
      num = nume
    }
  }
  
  return num
  
}
