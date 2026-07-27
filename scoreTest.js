//returns the test score
function scoreTest(str, right, omit, wrong){
let sum = 0

for(let c of str){
  if(c === 0){
    sum+=right
  }else if(c === 1){
    sum+=omit
  }else if(
  c == 2){
    sum-=wrong
  }
}
  
  

return sum

}
