function alphabetWar(fight){

let l = {
  w : 4,
  p : 3,
  b:2,
  s:1
  
}

let r = {
  m : 4,
  q:3,
  d:2,
  z:1
}
let le = 0
let rg = 0

for(let c of fight){
  if(l[c]){
    le += l[c]
  }else if(r[c]) {
    rg += r[c]
  }
  
                  }
  
  if(le > rg)
    return 'Left side wins!'
  else if(le <rg){
    return 'Right side wins!'
    
  }

   else return "Let's fight again!";
}
