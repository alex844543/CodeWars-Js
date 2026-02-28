function parse( data )
{
let value = 0;
  let result = []
  for(let str of data){
    if(str === "i"){
      value+=1
    }
    
    if(str === 'd'){
      value-=1
    }
    
    if(str === 's'){
      value = value * value
    }
    if(str === 'o'){
      result.push(value)
    }
  }
  
  return result



}
