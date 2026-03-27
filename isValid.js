function isValid(board) {

let X = 0 
let O = 0 

for (let arr of board){
  for(let player of arr){
    if(player === 'X'){
       X++
       }else if(player === 'O'){
      O++   }
        }}
  
  if(X > O + 1 || O > X){
    return false
  }
   
  
  let xWins = countWins(board , 'X')
let oWins = countWins(board,'O')  


if(xWins > 0 && oWins > 0){
  return false
}
  
  if(xWins > 0 &&   X !== O + 1){
    return false
  }
  
  
  if(oWins > 0 &&   O !== X){
    return false
  }
  
  
  return true

}




function countWins(board , player){
  
  let wins = 0
  
  for(let i = 0 ; i < 3 ; i++){
    if(board[i][0] === player &&
      board[i][1] === player &&
       board[i][2] === player
      ){
      wins++
    }
  }
  
  for(let i = 0 ; i < 3 ; i++){
    if(board[0][i] === player && 
      board[1][i] === player &&
      board[2][i] === player){
      wins++
    }
  }
  
  if(board[0][0] === player && 
    board[1][1] === player &&
    board[2][2] === player ){
    wins++
  }
  
  if(board[0][2] === player && 
    board[1][1] === player &&
    board[2][0] === player ){
    wins++
  }
  
  return wins
  
}
