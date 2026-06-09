function vowel2index(str) {

if(str === '') return ''
  let spt = str.split("")
  let vowel = 'aeiouAEIOU'
  
  for(let i = 0 ; i<= spt.length -1  ; i++){
    if(vowel.includes(spt[i])){
      spt[i] = i +1
    }
  }
  
  return spt.join("")


}
