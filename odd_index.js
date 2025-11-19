function oddBall(arr){

let oddIndex = arr.indexOf('odd')

for(let i = 0;i<=arr.length;i++){
  if(typeof arr[i] === 'number'){
    if(arr[i] === oddIndex){
      return true;
    }
  }
}
  
  return false;


}
