function swapHeadAndTail(arr) {
let res = []

let mid  =  Math.floor(arr.length /2)
  if(arr.length % 2 == 0){
    
    return arr.slice(mid).concat(arr.slice(0,mid))
    
  }else 
    {
      return arr.slice(mid +1).concat(arr[mid]).concat(arr.slice(0,mid))
    }
  
  
}
