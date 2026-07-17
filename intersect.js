function intersect(...arrays) {
  let result = [];
    if (arrays.length === 0) return [];


  for (let item of arrays[0]) {
    if (arrays.every(arr => arr.includes(item))) {
      result.push(item);
    }
  }

  return result;
}
