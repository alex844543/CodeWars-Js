function checkRoot(string){

  if (!/^[1-9]\d*(,[1-9]\d*){3}$/.test(string)) {
    return "incorrect input";
  }
  
  let nums = string.split(",").map(Number)
  
  for(let i = 0 ; i < nums.length - 1 ;i++){
    if(nums[i] + 1 !== nums[i + 1]){
      return 'not consecutive'
    }
  }
  
  let product = nums[0] * nums[1] * nums[2] * nums[3]
  let result  =  product + 1
  
  let root = Math.sqrt(result)

return `${result}, ${root}`
  
}
