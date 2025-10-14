function fifa(ticket, results){
  let total = 0 ;
  
  const bets = Object.keys(ticket)

  
  for(let i = 0 ; i < results.length ; i++){
  let result = results[i];
    const[homeGoals , awayGoals] = result.split('-').map(Number)
    
    let outcome;
    if (homeGoals > awayGoals){
      outcome = 'Home'
    }else if(awayGoals > homeGoals){
      outcome = 'Away'
    }else{
      outcome = 'Draw'
    }
    
    if(bets[i] === outcome){
      total += parseInt(ticket[bets[i]].replace('£', '') )
    }
  }
  
    return `£${total}`;
}
