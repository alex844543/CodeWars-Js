function dashatize(num) {
  num = Math.abs(num);

  let result = String(num)
    .split("")
    .map(d => (Number(d) % 2 !== 0 ? "-" + d + "-" : d))
    .join("");

  return result
    .replace(/--+/g, "-")   
    .replace(/^-|-$/g, ""); 
}
