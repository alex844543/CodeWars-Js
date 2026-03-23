function flyBy(lamps, drone){

  let lampsss  = lamps.split("")
  
  for(let i = 0 ; i < lamps.length;i++){
    if(drone[i] === '=' || drone[i] === 'T'){
      lampsss[i] = "o"
    }
  }
  
  return lampsss.join("")
  
  
  
}
