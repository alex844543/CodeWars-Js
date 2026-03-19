function nextHigher(n) {
  const c = n & (-n);
  const r = n + c;
  return r | (((r ^ n) >> 2) / c);
}
