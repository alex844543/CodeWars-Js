function solve(eq) {
  return eq.match(/[A-Za-z0-9]+|[+\-*/]/g)
           .reverse()
           .join("");
}
