var numberToMoney = function(n) {
  
  let str = n.toString()
  
  let [whole,dec] = str.split('.');
  
  dec = dec.slice(0,2);
  
    dec = dec.replace(/0+$/, "");

   whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return dec.length > 0 ? whole + '.' + dec : whole
  
};
