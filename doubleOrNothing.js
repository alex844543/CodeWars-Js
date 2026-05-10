function doubleOrNothing(cash, wager, losses) {

  let sum = 0;

  for(let i = 0; i < losses; i++) {
    sum += wager;

    if(i !== 0){
      wager *= 2;
    }
  }

  if(sum > cash) {
    return "I'll pay you back later";
  }

  return cash - sum;
}
