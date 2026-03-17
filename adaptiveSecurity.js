function breachAttempts(hackers, securityLevel, increase) {
  let breaches = 0;

  for (let h of hackers) {
    if (h > securityLevel) {
      breaches++;
    } else {
      securityLevel += increase; 
    }
  }

  return breaches;
}
