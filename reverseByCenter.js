function reverseByCenter(s){

  if(s.length % 2 === 0){
    let spt = s.length / 2
    return s.slice(spt) + s.slice(0,spt)
  }else if(s.length % 2 !== 0){
    let spt = Math.floor(s.length / 2)
    return s.slice(spt+1) + s[spt] + s.slice(0,spt)
  }
  



}
