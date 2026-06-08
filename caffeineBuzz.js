function caffeineBuzz(n) {

  let result = ''
  
  if(n%3 === 0 && n %4 ===0){
    result+='Coffee'
  }else if(n % 3 === 0){
    result+='Java'
  }else {
    
    return 'mocha_missing!'
  }
  
  return n % 2 === 0 ? result + 'Script' : result


}
