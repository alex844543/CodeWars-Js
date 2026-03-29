String.prototype.isAudio= function(){
let splt = this.split('.')

  
 if (
  /^[a-zA-Z]+$/.test(splt[0]) &&
  (splt[1] === 'mp3' ||
   splt[1] === 'flac' ||
   splt[1] === 'alac' ||
   splt[1] === 'aac')
) {
  return true;
}
  
  return false
  
  
};
String.prototype.isImage= function(){

let splt = this.split('.')
  
   
  if( /^[a-zA-Z]+$/.test(splt[0]) &&(splt[1] === 'jpg'
    || splt[1] === 'jpeg'|| splt[1] === 'png' || splt[1] === 'bmp'|| splt[1] === 'gif')){
    return true
  }
  return false
  
  }
