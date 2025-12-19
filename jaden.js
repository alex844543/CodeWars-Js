Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     let word = this.split(" ");
     
     return word.map(m => m[0].toUpperCase() + m.slice(1)).join(" ")
     
   }
  }
);
