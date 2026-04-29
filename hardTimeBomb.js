for(let keys in globalThis){
  if(typeof globalThis[keys] === 'number'){
    
    Bomb.CutTheWire(globalThis[keys]) ; 
  }
}

