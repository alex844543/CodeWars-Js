function oddNotPrime(n) {

  function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    
    return true;
  }

  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0 && !isPrime(i)) {
      count++;
    }
  }

  return count;
}
