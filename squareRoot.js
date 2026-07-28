function squareRoot(x) {
  if(x === 0)
    return NaN
let guess = x;

for (let i = 0; i < 25; i++) {
    guess = (guess + x / guess) / 2;
}

return Number(guess.toFixed(5));}
