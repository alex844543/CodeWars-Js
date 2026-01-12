function add(num1, num2) {
  
 let a = num1.toString().split('');
    let b = num2.toString().split('')
  
  let len = Math.max(a.length,b.length)
  
  let res =''
  for(let i = 1; i<=len;i++){
   let x = Number(a[a.length-i]|| 0);
    let y = Number(b[b.length-i]|| 0 );
    
    res = (x+y) + res
  }
  
  return Number(res)

  

}
