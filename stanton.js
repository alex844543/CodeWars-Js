function stantonMeasure(a){
  let n = a.filter(b => b===1).length
  
  let stan = a.filter(b => b===n).length
  
  return stan
}
