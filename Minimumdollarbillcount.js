function minimumBillCount(value, availables) {
  
  availables.sort((a,b) => b-a);
  let count = 0;
  for (val of availables){
    count+= Math.floor(value/val)
    value %= val
  }
  
  
  
    return count;
}
