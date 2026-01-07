function exchangeWith(a, b) {

a.reverse();
  b.reverse();
  
  let temp = a.splice(0,a.length);
  a.push(...b);
  b.splice(0,b.length,...temp)

}
