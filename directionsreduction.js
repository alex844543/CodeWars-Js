function dirReduc(arr) {
  let stack = []; 
  
  for (let dir of arr) {
    let last = stack[stack.length - 1]; 
    
    if ((dir === "NORTH" && last === "SOUTH") ||
        (dir === "SOUTH" && last === "NORTH") ||
        (dir === "EAST"  && last === "WEST")  ||
        (dir === "WEST"  && last === "EAST")) {
      stack.pop(); // cancel them
    } else {
      stack.push(dir); // keep this one
    }
  }
  
  return stack;
}
