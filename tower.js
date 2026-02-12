function towerBuilder(nFloors) {

let tower = []
for(let i = 1;i<=nFloors;i++){
  let spaces = " ".repeat(nFloors - i);
  let star = '*'.repeat(2*i-1);
  tower.push(spaces + star + spaces)
}
  return tower

}
