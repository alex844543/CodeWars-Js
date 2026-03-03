function encrypt(text, n) {

  if(!text || n<=0) return text;
  
  for(let round = 0 ; round<n;round++){
let odd = ""
let even = ""
for(let i = 0 ; i<text.length;i++){
  if(i%2 === 1){
    odd+=text[i]
  }else{
    even+=text[i]
  }
}
    text = odd+even
  }
  return text
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

 for (let r = 0; r < n; r++) {
    let result = "";
    let half = Math.floor(encryptedText.length / 2);

    let odd = encryptedText.slice(0, half);
    let even = encryptedText.slice(half);

    let oddIndex = 0;
    let evenIndex = 0;

    for (let i = 0; i < encryptedText.length; i++) {
      if (i % 2 === 0) {
        result += even[evenIndex++];
      } else {
        result += odd[oddIndex++];
      }
    }

    encryptedText = result;
  }

  return encryptedText;
}
