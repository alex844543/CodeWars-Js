function pyramid(balls) {

let level = 0;
let need = 1;

while (balls >= need) {
  balls -= need;
  level++;
  need++;
}
  
  return level



}
