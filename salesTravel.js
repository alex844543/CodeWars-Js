function travel(r, zipcode) {
let result =[]
    let address = [];
  let numbers = []

let splitted = r.split(",")
for(let char of splitted ){
  let exact = char.slice(-8)
  if(exact === zipcode){
    let charSplit = char.split(" ")
    numbers.push(charSplit[0])
const result = char.match(/(?<=^\d+\s).+?(?=\s+[A-Z]{2}\s+\d{5})/);
if(!result) continue    
    address.push(result[0])
  }
  

}
  
  if (r === "") return zipcode + ":/";

if (address.length === 0) return zipcode + ":/"
  let newAd = address.join(",");
  let newNum = numbers.join(",")
  
  
  
  let joined = zipcode+":"+newAd+"/"+newNum;
  return joined

}
