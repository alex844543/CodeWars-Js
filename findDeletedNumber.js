function findDeletedNumber(arr, mixArr) {


for(let n of arr){
 if(!mixArr.includes(n))
   return n
}
  
  return 0
  

}
