function reverseNumber(n) {
  if (n < 0) {
    n = n.toString()
    n = n.split("")

    let fr = n[0]
    let res = n.slice(1).reverse().join("")

    n = fr + res
    n = Number(n)
  } else {
    n = n.toString().split("").reverse().join("")
    n = Number(n)
  }

  return n
}
