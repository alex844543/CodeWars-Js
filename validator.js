function password(str) {
if(
str.length>= 8 &&
  str.match(/[A-Z]/)&&
    str.match(/[a-z]/)&&
  str.match(/[0-9]/)){
  return true
}else{
  return false
}


}
