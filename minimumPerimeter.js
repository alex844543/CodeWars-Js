function minimumPerimeter(area) {
for(let i  = Math.floor(Math.sqrt(area)); i > 0 ; i--){
  if(area % i === 0){
return 2 * (i + area/i)
  }
}


}
