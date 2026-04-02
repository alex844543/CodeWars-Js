function evenBinary(n) {

let even = []
let splitted = n.split(" ")

for(let char of splitted){
if(char[char.length -1 ] === '0' && char.length === 3){
  even.push(char)
}
 
  
}
  
   even = even.sort((a,b) => a -b)  
  let pointer = 0
  
  for(let i = 0 ; i<splitted.length ; i++ ){
    if(splitted[i][splitted[i].length -1 ] === '0'  && splitted[i].length === 3 ){
      splitted[i] = String(even[pointer]);
      pointer++
    }
  }
return splitted.join(" ")

}
