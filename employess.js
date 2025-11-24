function findEmployeesRole(name) {
  let r = name.split(" ")
  let firstNamee = r[0]
  let lastNamee = r[1]
 
  for(person of employees ){
    if(person.firstName === firstNamee && person.lastName === lastNamee){
      return person.role
    }
  }
  
  return "Does not work here!"
  
}
