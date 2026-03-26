function getReversedColor(hexColor) {
  if (typeof hexColor !== 'string') throw Error('Invalid');

  if (hexColor.length > 6) throw Error('Invalid');

  if (!/^[0-9a-fA-F]*$/.test(hexColor)) throw Error('Invalid');

  if(hexColor.length < 6){ 
    let zero = '0'.repeat(6 - hexColor.length)
    hexColor = zero + hexColor 
  }

  let result = "";

  for (let i = 0; i < 6; i++) {
    let num = parseInt(hexColor[i], 16);
    let comp = 15 - num;
    result += comp.toString(16);
  }

  return "#" + result.toUpperCase();
}
