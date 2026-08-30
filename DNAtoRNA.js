function DNAtoRNA(dna) {

let res = []

for(let c of dna){
  if(c === 'T'){
    
    res.push('U')
  } 
  else
  res.push(c)
}
  
  return res.join("")



}
