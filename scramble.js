function scramble(str, arr) {
let result =[]

for(let i =0; i<arr.length;i++){
  let currentP = arr[i];
  
  result[currentP] = str[i]
}
  
  return result.join('')

};
