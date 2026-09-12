function transposeTwoStrings(array) {
  let ans = ""

  let max = Math.max(array[0].length, array[1].length)
for (let i = 0; i < max; i++) {
    ans += (array[0][i] || " ") + " " + (array[1][i] || " ")

 if (i < max - 1) {
      ans += "\n"
    }
}

  return ans
}
