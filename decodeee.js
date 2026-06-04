function decode(str) {
  if (typeof str !== "string") {
    return "Input is not a string";
  }

  let result = [];

  let spt = str.split(" ");

  for (let ch of spt) {
    let strig = "";

    for (let c of ch) {
      let oldChar = c.charCodeAt(0);

      if (c >= "a" && c <= "z") {
        strig += String.fromCharCode(219 - oldChar)
        
  } else if (c >= "A" && c <= "Z") {
        
        strig += String.fromCharCode(155 - oldChar)
        
      } else {
        strig += c;
      }
    }

    
    result.push(strig)
    
  }

  return result.join(" ");

}
