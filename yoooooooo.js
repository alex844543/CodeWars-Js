Array.prototype.all = function (p) {
for(item of this){
  if(p(item)===false){
    return false
  }
}
  
  return true;
};

Array.prototype.none = function (p) {
for(item of this){
  if(p(item)===true){
    return false
  }  
}return true};

Array.prototype.any = function (p) {
for(item of this){
  if(p(item)===true){
    return true
  }
  
}return false}
