
function validatePIN (pin) {

if(pin.length !== 4 && pin.length !== 6){
  return false
}
  
  for(let c of pin){
    if (c < '0' || c > '9') {
      return false
    }
  }

  return true
}
