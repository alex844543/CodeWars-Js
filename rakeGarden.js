function rakeGarden(garden) {
  // TODO: Program Me
  let arr= garden.split(" ").map(item => {
    if(item === 'rock' || item === 'gravel'){
      return item 
    }
    
    return 'gravel'
  })
  
  return arr.join(" ")
}
