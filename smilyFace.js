function countSmileys(arr) {
let result = arr.filter(f => /^[:;][-~]?[)D]$/.test(f))
return result.length
}
