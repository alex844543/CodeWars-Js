function generateShape(integer){
let n = integer;
  
  let rows='+'.repeat(n);
  let result =[];
  
  for(let i = 0;i<n;i++){
    result.push(rows)
    
  }
  
  return result.join('\n')
}
