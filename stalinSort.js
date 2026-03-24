function stalinSort(array) {
  
  let last = array[0]

  
  for(let i = 1 ; i < array.length;i++){
    if(array[i] >= last){
      last = array[i]
    }else{
      array.splice(i,1)
      i--
    }
  }
  
}
