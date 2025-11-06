function sumItUp(numbersWithBases){
 let sum =  0;
  for(let i = 0 ; i<numbersWithBases.length;i++){
    let base = parseInt(numbersWithBases[i][0],numbersWithBases[i][1]);
    sum+=base
  }
  
  return sum;

}
