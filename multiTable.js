function multiTable(number) {

let table = []

for(let i = 1 ; i <=10 ; i++){
  let res = i * number
 table.push(`${i} * ${number} = ${res}` )
}

return table.join('\n')


}
