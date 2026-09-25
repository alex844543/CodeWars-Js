function reverse(n, result = 0) {
  if (n === 0) {
    
    return result
  }

  result = result * 10 + n % 10
  
  n = Math.floor(n / 10)

  return reverse(n, result)
}
