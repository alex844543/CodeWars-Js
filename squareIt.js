function squareIt(int) {
    int = String(int)

  
  let n  =  int.length
  let arr = []
      let r = Math.sqrt(n)

  
  if(Number.isInteger(r)){
    
    for(let i = 0 ; i < n ; i+=r ){
      arr.push(int.slice(i,i+r))
    }
    
    return arr.join('\n')
  }
  
  
	return 'Not a perfect square!';
}
