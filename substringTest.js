 function substringTest(str1, str2){
    str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()


   
   let arr1 = []
   let arr2 = []
   
   for(let i = 0 ; i<str1.length-1; i++){
     let spt = str1.slice(i,i+2)
     arr1.push(spt)
   }
   
   for(let i = 0 ; i<str2.length-1; i++){
     let spt = str2.slice(i,i+2)
     arr2.push(spt)
     
     
   }
   
for(let i = 0; i < arr1.length; i++){
  if(arr2.includes(arr1[i]))
    return true
}
   
   return false
   
}
