function mazeRunner(maze, directions) {
let size = maze.length
let col,row

for(let r = 0 ; r < size;r++){
  for(let c = 0 ; c < size;c++){
    if(maze[r][c] === 2){
      row = r
      col = c
    }
  }
}
  
  for(let move of directions){
    if (move === "N") row--
    if (move === "S") row++
    if (move === "E") col++
    if (move === "W") col--

     if (row < 0 || col < 0 || row >= size || col >= size) {
      return "Dead"
    }
    
    if(maze[row][col]===1){
      return 'Dead'
    }
    
     if(maze[row][col]===3){
      return 'Finish'
    }
    
  }
  
  return 'Lost'
}
