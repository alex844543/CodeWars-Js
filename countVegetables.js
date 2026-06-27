function countVegetables(string){
const vegetables = [
        "cabbage",
        "carrot",
        "celery",
        "cucumber",
        "mushroom",
        "onion",
        "pepper",
        "potato",
        "tofu",
        "turnip"
    ];
  
  let spt = string.split(" ")
  let finalVeg = []
  
  for(let c of spt){
    if(vegetables.includes(c)){
      finalVeg.push(c)
    }
  }
  
  let count = {}
  
  for(let c of finalVeg){
    count[c] = (count[c]||0) + 1
  }
  
  let result =[]
  
  for(let key in count){
    result.push([count[key] , key])
  }
  
  return result.sort((a,b) => b[0] - a[0] ||b[1].localeCompare(a[1]) )


}
