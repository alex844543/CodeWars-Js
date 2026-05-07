function maxFall(arr) {


      let biggest = 0
      let highest = arr[0]

  for(let i = 1; i < arr.length ; i++){
    let ans = 0
    if(highest > arr[i]) {
     ans = highest - arr[i]
      if(ans > biggest) biggest = ans
    }else if (highest < arr[i]){
      highest = arr[i]
    }
  }
  
return Number(biggest.toFixed(4))  
  
}
