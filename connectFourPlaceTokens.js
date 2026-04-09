function connectFourPlaceTokens(columns) {

let grid = [
 ['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-']
];
  
  let first = 'Y'
  for(let i = 0 ;i <columns.length ; i++){
    
    for(let j = 5 ; j>=0 ; j--){
      if(grid[j][columns[i]] === "-"){
        grid[j][columns[i]] = first
        first === 'Y' ? first = 'R' : first = 'Y'
        break;
      }
    }
    
    
    
  }
return grid
  
}
