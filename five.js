function dontGiveMeFive(start, end)
{
let count = 0;
  
  for(let num = start;num<=end;num++){
    let text = String(num)
    
    if(!text.includes('5')){
      count+=1
    }
  }
  
  return count

}
