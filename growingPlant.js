function growingPlant(upSpeed, downSpeed, desiredHeight) {

  let height = 0 
  
  let days = 0
  
  while(height < desiredHeight){
    height+=upSpeed
    days++
    
    if(height >= desiredHeight) return days
    
    height-=downSpeed
    
  }
  
}
