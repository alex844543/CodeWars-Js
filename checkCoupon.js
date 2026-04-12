function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if(enteredCode != correctCode){
      return false
    }else if(typeof enteredCode != typeof correctCode) return false;
  
  const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
  
  let [monthC , dateC ,yearC] = currentDate.split(" ");
    let [monthU , dateU ,yearU] = expirationDate.split(" ");

  let dC = Number(dateC.slice(0,-1))
  let dU = Number(dateU.slice(0,-1))

  let mC = months.indexOf(monthC)
  let mU = months.indexOf(monthU)

  yearC = Number(yearC)
  yearU = Number(yearU)

  if (yearC < yearU) return true
  if (yearC > yearU) return false

  if (mC < mU) return true
  if (mC > mU) return false

  if (dC <= dU) return true

  return false;
}
  
