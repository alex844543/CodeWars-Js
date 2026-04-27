function wrappingPaper(boxes) {
  let total = 0
  
  for(let i = 0 ; i  < boxes.length ; i++){
    let [l,w,h] = boxes[i]
    
    let surface  = 2 * (l*w + w*h + h*l)
    let smallest  = Math.min(l*w,w*h,h*l)
    total += smallest + surface
  }
  
  return total
  
}
