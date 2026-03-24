function feast(beast, dish) {

let beastArr = beast.split("")
let dishArr = dish.split("")

if(beastArr[0] === dishArr[0] && beastArr[beastArr.length-1] ===  dishArr[dishArr.length-1] ){
  return true
}else {
  return false
}


}
