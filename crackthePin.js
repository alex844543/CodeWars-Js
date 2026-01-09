const crypto = require("crypto");

function crack(hash){
for(let i =0;i<=99999;i++){
  const pin = i.toString().padStart(5,"0");
  
  const hashGen = crypto.
  createHash('md5')
  .update(pin)
  .digest('hex');
  
  if(hashGen === hash){
    return pin
  }
}

}
