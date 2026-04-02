
let count = {}

function bruteForceDetected(loginRequest)
{
  
  let ip = loginRequest.sourceIP
  
  if(!count[ip]) count[ip] = 0;
  
  if(loginRequest.successful === false){
    count[ip]++
  }else if(loginRequest.successful === true){
    count[ip] = 0
  }
  
if(count[ip] >= 20){
  return true
}else { 
return false
}
  
  

}
