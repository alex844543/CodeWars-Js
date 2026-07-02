function convertPalindromes(numbers) {

  
  let res = []
  
  for(let n of numbers){
    let na = n.toString().split("").reverse().join("")
    if(Number(na) === n){
      res.push(1)
    }else {
      res.push(0)
    }
  }
  
  return res
  
  
};
