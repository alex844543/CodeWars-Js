function sc(a, b, c) {
  if (a + b === c) return `${a}+${b}=${c}`
  if (a + c === b) return `${a}+${c}=${b}`
  if (b + c === a) return `${b}+${c}=${a}` 

  if (a - b === c) return `${a}-${b}=${c}`
  if (a - c === b) return `${a}-${c}=${b}`
  if (b - a === c) return `${b}-${a}=${c}`
  if (b - c === a) return `${b}-${c}=${a}`
  if (c - a === b) return `${c}-${a}=${b}`
  if (c - b === a) return `${c}-${b}=${a}`

  if (a * b === c) return `${a}*${b}=${c}`
  if (a * c === b) return `${a}*${c}=${b}`
  if (b * c === a) return `${b}*${c}=${a}`

  if (b !== 0 && a / b === c) return `${a}/${b}=${c}`
  if (c !== 0 && a / c === b) return `${a}/${c}=${b}`
  if (a !== 0 && b / a === c) return `${b}/${a}=${c}`
  if (c !== 0 && b / c === a) return `${b}/${c}=${a}`
  if (a !== 0 && c / a === b) return `${c}/${a}=${b}`
  if (b !== 0 && c / b === a) return `${c}/${b}=${a}`

  return ""
}
