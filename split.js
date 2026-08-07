function split(str, mask) {
  let total = 0

  for (let n of mask) {
    total += n
  }

  if (total !== str.length) {
    return null
  }

  let result = []
  let position = 0

  for (let n of mask) {
    result.push(str.slice(position, position + n))
    position += n
  }

  return result
}
