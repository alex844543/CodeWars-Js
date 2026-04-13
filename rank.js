function rank(st, we, n) {

  
  if(st === ""){
    return "No participants"
  }
  
  
  
let stPt = st.split(",")


if(n>stPt.length) return "Not enough participants"
  let final = []


for(let i = 0 ; i < stPt.length;i++ ){
    let total = 0

  let res = []
  let length = stPt[i].length
  for(let j = 0 ; j<stPt[i].length; j++){
    let char = stPt[i][j]
    let r = char.toLowerCase().charCodeAt(0) - 96 ;
    res.push(r)
  }
  
  total = res.reduce((a,b) => a + b,0)
  total+=length
  total*=we[i]
  let objjj = {
 name : stPt[i],
    score: total
  }
  
  final.push(objjj)
  
}
  
  final.sort((a,b) => {
    if(a.score !== b.score) return b.score - a.score
    else return a.name.localeCompare(b.name); 

  })
  
  return final[n-1].name
  
}
