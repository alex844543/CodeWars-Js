function apparently(string) {


let arr = string.split(" ");
  let newArr = [];
  
for(let i = 0 ; i < arr.length ; i++){
  let word = arr[i]
  newArr.push(word)
  
  if(word === 'and' || word === 'but'){
if(arr[i+1] !== "apparently"){
  newArr.push('apparently')
}
  
  }
} 
  
 return newArr.join(" ")
  
}
