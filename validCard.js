function validCard(card){
let spt = card.split(" ").join("").split("")
let result = []

for(let i = spt.length - 2 ; i >= 0 ; i-=2){
  spt[i] = spt[i] * 2
  if(spt[i] > 9){
    spt[i]-=9
  }
}
  spt = spt.map(Number)
  let c = spt.reduce((a,b) => a+b,0)
  
  return c % 10 === 0 ? true : false


}
