function calculateHypotenuse(a, b) {

  if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Only numbers are accepted');
  }

  if (a <= 0 || b <= 0) {
    throw new Error('Sides must be positive');
  }


  let c = Math.sqrt(a * a + b * b);

  return Number(c.toFixed(3));
}
