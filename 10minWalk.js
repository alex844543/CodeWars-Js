function isValidWalk(walk) {
let count = {};
  
  for(let w of walk){
    if(count[w] === undefined){
      count[w] = 1;
    }else{
      count[w]++
    }
  }
  
  if(walk.length === 10 && count["n"]===count['s']&&count['e']===count['w']){
    return true
  }else{
    return false
  }


}
