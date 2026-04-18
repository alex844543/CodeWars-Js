function check(board) {
  
  let yes = null;
  let test = []
    let index = 0;
      let idx2 = 0;

  for(let i = 0 ; i < board.length ; i++){
      if(board[i].includes("q")&&board[i].includes("k")){
        yes = true
        break;
      }
   
    for(let j = 0 ; j < board[i].length ; j++){
     
    
        if(board[i][j] === "q" ){
          index = j;
          test.push([i,j])
        }else if(board[i][j] === "k"){
          idx2 = j
          test.push([i,j])
        }
    }
    
 
    
  }
        if(index === idx2) yes = true;

  
  if (test.length >= 2){
  
  let v1 = test[0][0] +test[0][0+1];
  
  let v2 = test [1][0] + test[1][1]
  let v3 = test[0][0] -test[0][0+1]
  let v4 =test [1][0] - test[1][1]
  

  
  if( v1 === v2 || Math.abs(v3) === Math.abs(v4))
    yes = true
    }
  
  if(yes) return true;
  else return false;
  
  
  
  
}
