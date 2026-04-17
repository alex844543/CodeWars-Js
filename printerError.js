function printerError(s) {
   
  let length = s.length;
  let count = 0
  for(let chr of s){
    let mCode = 109;
    let nowCode = chr.charCodeAt(0);
    if(mCode < nowCode){
      count++
    }
  }
  
  return `${count}/${length}`
  
}
