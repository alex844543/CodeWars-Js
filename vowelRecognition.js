function vowelRecognition(str) {
  let vowels = "aeiouAEIOU"
  let total = 0

  for (let i = 0; i < str.length; i++) {

    if (vowels.includes(str[i])) {

      let left = i + 1
      let right = str.length - i

      total += left * right
    }
  }

  return total
}
