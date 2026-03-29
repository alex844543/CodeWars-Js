function getAttendees(peopleInvited, responses){

  let result = []
  
  for(let person of peopleInvited){
  let res = responses.find(r => r.name === person)
  
  if(!res){
    result.push(person)
  }else if(res.response === 'accepted'){
    result.push(person)
  }
  }
  
return result

}
