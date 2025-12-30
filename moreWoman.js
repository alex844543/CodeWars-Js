function inviteMoreWomen(L) {
  let menCount = 0;
  let womenCount =0;
  for(let i =0; i<L.length ; i++){
    if(L[i]===1){
      menCount++
    }else if(L[i]=== -1){
      womenCount++;
    }
  }
  
  if(womenCount < menCount){
    return true;
  }else{
    return false
  }


  
  
}
