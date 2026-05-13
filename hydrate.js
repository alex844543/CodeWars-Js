function hydrate(s) {

  let ans = 0
  
for(let i = 0 ; i < s.length ; i++){
  if(s[i] >= '0' && s[i]<='9'){
    ans+=Number(s[i])
  }
  
}
  
  return  ans==1 ? `${ans} glass of water` : `${ans} glasses of water`

}
