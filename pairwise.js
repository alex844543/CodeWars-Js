function pairwise(arr, n) {
  let used = [];
  let result = 0;

  for(let i = 0; i < arr.length; i++) {

    for(let j = i + 1; j < arr.length; j++) {

      
      if(arr[i] + arr[j] === n) {
        

        if(!used.includes(i) && !used.includes(j)) {

          used.push(i, j);
          result += i + j;

        }
      }
      
    }
    
  }

  return result;
}
