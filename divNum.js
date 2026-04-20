const divNum = (a, b) => { 
  if (a > b) return "Error"

  let num = 0;
  let max = 0;
  for (let i = a; i <= b; i++) {
    let count = 0;

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        count++
        if (j !== i / j) {
          count++
        }
      }
    }

    if (count > max) {
      max = count
      num = i
    }
  }
  return num
}
