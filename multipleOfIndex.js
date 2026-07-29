function multipleOfIndex(array) {

let arr =[]

for(let i = 0 ; i < array.length ; i++){
if (i === 0 && array[i] === 0) {
      arr.push(0);
    }else
  if(array[i] % i === 0 ){
   arr.push(array[i])
  }
}
  
  return arr
}
