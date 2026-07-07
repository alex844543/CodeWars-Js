Array.prototype.remove_ = function(integer_list, values_list){
let result = []
for(let c of integer_list){
  if(!values_list.includes(c)){
    result.push(c)
  }
}
  
  return result


}
