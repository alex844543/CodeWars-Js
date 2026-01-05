function playerManager(players) {
if(!players) return [];
  
  const parts = players.split(', ');
  let result =  [];
  
  for(let i = 0 ; i <parts.length;i+=2){
    result.push({
      player: parts[i],
      contact: Number(parts[i+1]) 
    })
  }
  
return result

}
