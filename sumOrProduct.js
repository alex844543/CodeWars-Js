function sumOrProduct(array, n) {

array = array.sort((a,b) => a-b)
  
  let product = array.slice(0,n).reduce((a,b) => a* b , 1)
  let sum = array.slice(-n).reduce((a,b) => a+ b , 0)
  
  if(sum > product){
    return 'sum'
  }else if(sum < product){
    return 'product'
  }else{
    return 'same'
  }

}
