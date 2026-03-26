function pizzaRewards(customers, minOrders, minPrice) {
  
  let result = []
  
  for(let key in customers){
    let orders = customers[key]
    let count = 0
    for(let value of orders){
      if(value >= minPrice){
        count++
      }
    }
    
    if(count >=minOrders){
      result.push(key)
    }
    
  }
  
  return result

}
