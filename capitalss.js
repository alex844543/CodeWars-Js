var capitals = function (word) {

let res = []

for(let i = 0 ; i<word.length ; i++){
  if(word[i].toUpperCase() === word[i]){
    res.push(i)
  }
}
  
  return res


};
