function howMuchCoffee(events) {

let coffee = 0;
  for(let event of events){
    let lowerEvent = event.toLowerCase()
    if(lowerEvent === "cw" ||lowerEvent === "dog" || lowerEvent === "cat" || lowerEvent === "movie"){
      if(event === event.toUpperCase()){
        coffee+=2
      }else{
        coffee+=1
      }
    }
  }
return coffee > 3 ? 'You need extra sleep' : coffee
}
