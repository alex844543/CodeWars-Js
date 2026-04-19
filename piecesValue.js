function piecesValue(arr, s) {
  
  let first = s.slice(0,1);
  
  let total = 0;
  const hash = Object.freeze({
  queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
});

  
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr[i].length;j++){
      let piece = arr[i][j]
      if(piece !== " " && piece !== `${first}-king`){
        if(piece.slice(0,1) === first){
          let [f,v] = piece.split("-");
          let value = hash[v]
          total+=value
        }
      }
    }
  }
  
  return total
  
  
}
