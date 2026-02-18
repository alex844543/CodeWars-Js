function findMissingLetter(array)
{

for(let i = 0;i<array.length-1;i++){
  let current  = array[i].charCodeAt(0)
  let next = array[i+1].charCodeAt(0)
  
  if(next !== current+1){
    return String.fromCharCode(current + 1) 

  }
}



}
