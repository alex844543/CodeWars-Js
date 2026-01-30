var toexuto = function(text) {
 const map = {
    b:'a', c:'a', d:'a',
    f:'e', g:'e', h:'e',
    j:'i', k:'i', l:'i', m:'i', n:'i',
    p:'o', q:'o', r:'o', s:'o', t:'o',
    v:'u', w:'u', x:'u', y:'u', z:'u'
  };
  
  let res = ''
  
  for(let ch of text){
    let small = ch.toLowerCase();
    
    if(map[small]){
     res += ch+map[small]
    }else{
     res+=ch
    }
  }
  
  return res
};
