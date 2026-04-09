function amidakuji(ar){
	
  
  let n = ar[0].length + 1
  
  let newArr = Array.from({length: n}, (_, i) => i);
  for(let row of ar){
    for(let i = 0 ; i < row.length;i++){
      if(row[i]  === '1'){
        let temp = newArr[i];
        newArr[i] = newArr[i+1]
        newArr[i+1] = temp
      }
    }
  }
  
  return newArr
}
