function menFromBoys(arr){

let odd =[]
let even  = []

for(let i = 0 ; i < arr.length;i++){
  let num = arr[i];
  if(num % 2 === 0){
    if(even.includes(num) === false){
      even.push(num)
    }
  }else {
     if(odd.includes(num) === false){
      odd.push(num)
  }
}

}
  
  odd = odd.sort((a,b) => b-a)
    even = even.sort((a,b) => a-b)
  
  
  return [...even,...odd]

  
  }
