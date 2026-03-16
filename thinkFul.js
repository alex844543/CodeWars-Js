function colorProbability(color, texture){

let marbles  = {
  red : {smooth : 1 , bumpy: 4},
   yellow : {smooth : 1 , bumpy: 2},
    green : {smooth : 1 , bumpy: 1},
}

let colorTex = marbles[color][texture]
let total = 0

for(let m in marbles){
  total+=marbles[m][texture]
}
  
  let probability = colorTex / total
  
  return probability.toString().slice(0,4)



}
