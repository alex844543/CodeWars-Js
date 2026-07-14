String.prototype.isUpperCase = function() {

for(let c of this){
  if(c.toUpperCase() !== c)
    return false
}
  
  return true

}
