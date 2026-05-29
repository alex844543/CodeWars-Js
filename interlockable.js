function interlockable(a, b) {

let x = a.toString(2)
let y = b.toString(2)


let max = Math.max(x.length, y.length)

x = x.padStart(max, '0')
y = y.padStart(max, '0')


for(let i = x.length - 1; i >= 0 ; i--){
  if(x[i] === '1' && y[i] ==='1'){
    return false
  }
}
  
  return true

}
