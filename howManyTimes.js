function howManyTimes(annualPrice, individualPrice) {

    if (individualPrice === 0) return 0;

  let count = 0;
  let total = 0

  while (annualPrice > total) {
    count++;
    total+= individualPrice
    
  }

  return count;

}
