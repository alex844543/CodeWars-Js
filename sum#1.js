function sum(x) {
  if (x === undefined) return 0;

  let total = x;

  function inner(y) {
    if (y === undefined) return total;
    total += y;
    return inner;
  }

  return inner;
}
