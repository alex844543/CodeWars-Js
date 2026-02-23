function insideOut(x){
let words = x.split(" ")
let result = words.map(word =>{
  let length = word.length
  let mid = Math.floor(length/2)
  
  if(length % 2 === 0){
    let left = word.slice(0,mid).split("").reverse().join("")
    let right = word.slice(mid).split("").reverse().join("")
    return left + right
  }else{
      let left = word.slice(0,mid).split("").reverse().join("")
      let middle = word[mid]
    let right = word.slice(mid+1).split("").reverse().join("")
    return left + middle + right

  }
})

return result.join(" ")
}
