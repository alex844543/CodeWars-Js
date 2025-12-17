function explode(x) {
  let score = 0;

  let isNum0 = typeof x[0] === "number";
  let isNum1 = typeof x[1] === "number";

  if (!isNum0 && !isNum1) return "Void!";

  if (isNum0) score += x[0];
  if (isNum1) score += x[1];

  let result = [];

  for (let i = 0; i < score; i++) {
    result.push(x);
  }

  return result;
}
