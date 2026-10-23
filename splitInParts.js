var splitInParts = function(s, partLength){


let ans  = []

for(let i = 0 ; i  < s.length ; i+=partLength){
  let spt = s.slice(i , i+partLength )
  ans.push(spt)
}
  
  return ans.join(" ")


}
