function goodVsEvil(good, evil){
  
  const goodWorth = [1, 2, 3, 3, 4, 10]
  const evilWorth = [1, 2, 2, 2, 3, 5, 10]

  let ga = good.split(" ")
  let ea = evil.split(" ")
  
  let sum1 = 0
    let sum2 = 0
    
    for(let i  = 0 ; i<goodWorth.length;i++){
      sum1+= Number(ga[i] * goodWorth[i])
    }
  
      for(let i  = 0 ; i<evilWorth.length;i++){
      sum2+= Number(ea[i] * evilWorth[i])
    }
    
    if(sum1 > sum2){
      return "Battle Result: Good triumphs over Evil"
    }else if(sum1 < sum2){
     return  "Battle Result: Evil eradicates all trace of Good"
    }else if(sum1 === sum2){
      return "Battle Result: No victor on this battle field"
    }

}
