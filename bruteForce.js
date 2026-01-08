function detectBruteForce(logs) {
   
  let fail ={};
  let bad = new Set();
  
  for(let log of logs){
    let [ip,action ] = log.split(" ");
    
    if(!fail[ip]){
      fail[ip] = 0;
    }
    
    if(action ==='LOGIN_FAIL'){
      fail[ip]++
            if (fail[ip] === 3) bad.add(ip);

    } else{
      fail[ip]=0
    }
  }
  
  return [...bad].sort()
  
  
}
