function meeting(s) {

let upper = s.toUpperCase();
  let people = upper.split(";")
  let formatted = [];
  
  for(let i = 0 ; i<people.length;i++){
    let parts = people[i].split(":")
    let first = parts[0];
    let second = parts[1]
    
    formatted.push(second + ", " + first)
  }
  
  formatted.sort()
  
  let result = ""
  for(let name of formatted){
    result+= "(" + name + ")"
  }
  
  return result

}
