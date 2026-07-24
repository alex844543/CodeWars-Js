var greet = function(name) {
  let fs = name.slice(0,1).toUpperCase()
  let ls = name.slice(1).toLowerCase()
  let final  = fs + ls
  
  return `Hello ${final}!`
  
  
};
