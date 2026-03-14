function common(a,b,c){
  let countB = {}
  let countC = {}
  let sum = 0

  for(let n of b){
    countB[n] = (countB[n] || 0) + 1
  }

  for(let n of c){
    countC[n] = (countC[n] || 0) + 1
  }

  for(let n of a){
    if(countB[n] > 0 && countC[n] > 0){
      sum += n
      countB[n]--
      countC[n]--
    }
  }

  return sum
}
