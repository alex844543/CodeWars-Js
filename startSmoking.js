function startSmoking(bars, boxes) {
  let cigs = bars * 180 + boxes * 18
  let smoked = cigs
  let stubs = cigs

  while (stubs >= 5) {
    
    let newCigs = Math.floor(stubs / 5)
    
    smoked += newCigs
    
    stubs = newCigs + (stubs % 5);
    
  }

  return smoked;
}
