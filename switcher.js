function switcher(x) {
  return x.map(n => {
    if (n === "27") return "!";
    if (n === "28") return "?";
    if (n === "29") return " ";
    return String.fromCharCode(123 - Number(n));
  }).join("");
}
