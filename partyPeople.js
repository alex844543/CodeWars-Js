function partyPeople(party) {
let people = party.length
while(true){
  let count = 0 
  for(let x of party){
    if(x <= people){
      count++
    }
  }
  
  if(people === count){
    return people
  }
  
  people = count
}


}
