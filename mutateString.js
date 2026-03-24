function mutateMyStrings(stringOne, stringTwo){
  let arr = stringOne.split("")
  
  let result = []
  
  result.push(arr.join(""))
  
  for(let i = 0 ; i<arr.length;i++){
    if(arr[i] !== stringTwo[i]){
      arr[i] = stringTwo[i]
       result.push(arr.join(""))
    }
  }
  
   return result.join("\n") + "\n";

  

}
