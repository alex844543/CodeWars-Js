function notPrimes(a,b){
  let result = []
  
  for(let i = a ; i < b; i++){
    
  if (/^[2357]+$/.test(i) && !isPrime(i))
  { result.push(i); }
  }
  
  return result
}

function isPrime(n) {

  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
