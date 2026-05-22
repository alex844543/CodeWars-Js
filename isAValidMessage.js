function isAValidMessage(message){

  if(message === "") return true

  let arr = message.match(/[0-9]+|[a-zA-Z]+/g)
  if(arr.length % 2 !== 0) return false

  for(let i = 0; i < arr.length - 1; i += 2){

    if(isNaN(arr[i])|| Number(arr[i]) !== arr[i + 1].length ){
      return false
    }

  }

  return true
}
