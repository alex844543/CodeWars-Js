function lookAndWrite(n) {
  let freq = Array(10).fill(0);
  freq[1] = 2;      
  let length = 2;

  for (let i = 0; i < n; i++) {
    let addedFreq = Array(10).fill(0);
    let addedLength = 0;

    for (let d = 0; d <= 9; d++) {
      if (freq[d] > 0) {
        let countStr = freq[d].toString();

       
        addedLength += countStr.length + 1;

       
        for (let ch of countStr) {
          addedFreq[ch]++;
        }

      
        addedFreq[d]++;
      }
    }
    for (let d = 0; d <= 9; d++) {
      freq[d] += addedFreq[d];
    }

    length += addedLength;
  }

  return length;
}
