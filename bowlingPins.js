function bowlingPins(arr) {
  
  let pins = [
  ['I',' ','I',' ','I',' ','I'],
  [' ','I',' ','I',' ','I',' '],
  [' ',' ','I',' ','I',' ',' '],
  [' ',' ',' ','I',' ',' ',' ']
]
  
    const map = {
    7:[0,0], 8:[0,2], 9:[0,4], 10:[0,6],
    4:[1,1], 5:[1,3], 6:[1,5],
    2:[2,2], 3:[2,4],
    1:[3,3]
  };
  
  for(let pin of arr){
    let [row,col] = map[pin]
    pins[row][col] = " "
  }
  
  
  
  
    return pins.map(r => r.join("")).join("\n")
}
