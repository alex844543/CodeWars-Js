function dative(word) {

let vowel = 'aáeéiíoóöőuúüű'
let lastVol = ''

for(let char of word){
  
  if(vowel.includes(char))
    lastVol = char
}
  
  if(lastVol === 'e'|| lastVol === 'é'||lastVol === 'i'||lastVol === 'í'||lastVol === 'ö'||lastVol === 'ő'||lastVol === 'ü'||lastVol === 'ű'){
     return word + 'nek' 
     }else if(
     lastVol === 'a'||
           lastVol === 'á'||
     lastVol === 'o'||
     lastVol === 'ó'||
     lastVol === 'u'||
     lastVol === 'ú'

     ) {
       return word + "nak"
     }



}
