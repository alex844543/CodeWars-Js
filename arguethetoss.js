function anArgument() {
  let args = Array.from(arguments)
if(arguments.length === 0){
   return "You didn't give me any arguments."  
}else if(arguments.length === 2){
    return `You gave me ${arguments.length} arguments and they are "${arguments[0]}" and "${arguments[1]}".`

}else if(arguments.length === 1){
             return `You gave me ${arguments.length} argument and it is "${arguments[0]}".`

         }
  
  const qouated = args.map(arr => `"${arr}"`);
    const last = qouated.pop();

  const joined = qouated.join(', ');
  return `You gave me ${arguments.length} arguments and they are ${joined} and ${last}.`
  

}
