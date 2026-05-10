function evenLast(numbers) {

  if(numbers.length === 0) return 0
  
  
let last = numbers[numbers.length-1]
let sum = 0
for(let i = 0 ; i < numbers.length ; i++){
  if(i%2 === 0){
    sum+=numbers[i]
  }
}
  
  last*=sum
  
  return last

}
