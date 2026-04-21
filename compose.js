function compose(s1, s2) {

let splited1 = s1.split("\n");
  let splited2 = s2.split("\n");
  
  let result = []
  
  
  for(let i = 0 ; i < splited1.length ; i++){
    let word = splited1[i];
    let s22 = splited2[splited2.length-(i+1)]
    let n = word.slice(0,i+1);
    let b = s22.slice(0, splited2.length - i);
   let m = n+b;
    result.push(m);
  }
  return result.join("\n");

}
