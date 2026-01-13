function whoWillWin(arr) {
if(arr.length === 0 ){
  return 'No one raced!'
}
  
  let result = []
  
  for (let r of arr ){
    let speed = parseFloat(r.speed)
    let distance = parseFloat(r.distanceToRun)
    
    if(speed > 0 && distance > 0){
      result.push({
        name: r.name,
        time : distance /speed
      })
    }
  }
  
  if(result.length === 0){
    return 'Everyone was disqualified!';
  }
  
  let min = Math.min(...result.map(t => t.time));
  let winner  = result.filter(t => t.time  === min)
  
  let rounded = Math.round(min)

  return winner.length === 1 
  ? `${winner[0].name} won the race in ${rounded} second(s)!`
  :  `${winner.length} people tied in ${rounded} second(s)!`;
  
}
