function hungrySeven(arr){

  let testArr = [...arr]
  
  
  for(let i = 0 ; i < testArr.length; i++){
    
    
    
    if(testArr[i] === 7 ){
      
      let j = i + 1
      
      while(testArr[j] === 7){
        j++
      }
      
      if(testArr[j] === 8 && testArr[j + 1] === 9){
        
        testArr.splice(i,1)
        testArr.splice(j + 1, 0, 7)
        
        i--
      }
    }
  }
  
  return testArr
}
