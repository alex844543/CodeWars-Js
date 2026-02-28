function all(arr, fun) {
  for (let n of arr) {
    if (!fun(n)) {
      return false
    }
  }
  return true
}
