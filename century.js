function whatCentury(year)
{

let first  = Number(year.slice(0,2))
let last  = year.slice(2)

let century 
if(last === '00'){
  century = first
}else{
  century = first + 1
}
  
  let suffix = 'th'
   if (century === 11 || century === 12 || century === 13) {
    suffix = "th";
  }else if(century % 10 == 1){
    suffix = 'st'
  }else if(century % 10 ==  2){
    suffix = 'nd'
}else if(century % 10 == 3){
  suffix = 'rd'
}
  
  return century+suffix
  
  
  }
