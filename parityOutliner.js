function findOutlier(integers){
 const evens = integers.filter(num => num % 2===0);
  const odd = integers.filter(num => num % 2 !== 0);
  
  return evens.length === 1 ?  evens[0] : odd[0]
}
