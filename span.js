function span(arr, predicate) {

  let result = [[],[]];
  let pass = true;

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i]) && pass) {
      result[0].push(arr[i])
      
      
    } else {
      result[1].push(arr[i])
      
      
      pass = false;
    }
  }

  return result;
}
