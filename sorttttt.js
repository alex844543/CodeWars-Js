function sort(initialArray, sortingArray) {
  let result = [];

  for (let i = 0; i < initialArray.length; i++) {
    
    result[sortingArray[i]] = initialArray[i];
  }

  return result;
}
