function luckCheck(ticket){
if(ticket.length === "") throw new Error('Empty String');
  if(!/^\d+$/.test(ticket)) throw new Error('Not a number');

  let len = ticket.length;
  let mid = Math.floor(len /2);
  
  let right = ticket.slice(0,mid);
  let left = ticket.slice(len % 2 === 0 ? mid : mid+1);
  
  let sumL = 0;
  let sumR = 0;
  
  for(let r of right){
    sumR+=Number(r)
  }
  for(let l of left){
    sumL+=Number(l)
  }
  
  return sumL === sumR

}
