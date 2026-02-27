function stockList(books, categories) {

if(books.length === 0 ||  categories.length === 0){
  return ""
}
  
  let result = []
  
  for(let c of categories){
    let sum = 0 
    for(let book of books){
      let parts = book.split(" ")
      let first = parts[0]
      let code = Number(parts[1])
      
      if(first[0] === c){
        sum+=code
      }
    }
    result.push(`(${c} : ${sum})`)
  }
  
  return result.join(" - ")

}
