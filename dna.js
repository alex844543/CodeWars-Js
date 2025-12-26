function dnaStrand(dna){
  const map = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  }
  
  let result =''
  
  
  for(let d of dna){
    result+=map[d]
}
  
  return result
}
