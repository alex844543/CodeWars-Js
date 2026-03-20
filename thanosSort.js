function thanosSort(arr) {
 if(arr.length === 0 ) return 0
  
  let sorted = true
  
  for(let i = 0 ; i < arr.length -1 ; i++){
    if(arr[i] > arr[i + 1]){
      sorted = false 
      break
    }
  }
  if(sorted) return arr.length
  let mid = Math.ceil(arr.length/2)
  let left = thanosSort(arr.slice(0,mid))
  let right = thanosSort(arr.slice(mid))
                         
                         return Math.max(left,right)
  
  
  }
