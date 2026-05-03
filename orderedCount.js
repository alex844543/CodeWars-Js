const orderedCount = function (text) {

  let count = {}
  let res = []
  let order = []
  
  for(let char of text){
    if(!count[char]){ count[char] = 1
                    order.push(char)
                    }
    
    else {
      count[char]++
    }
  }
  
  for(let keys of order){
    res.push([keys,count[keys]])
  }

  
  
  return res
}
