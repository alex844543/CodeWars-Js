// extend all numbers with toBits()
Number.prototype.toBits = function(length) {

let bit  = this.toString(2)
if(length === undefined){
  length = 8
}
  let repeat =''
  if(length > bit.length)
   repeat = '0'.repeat(length-bit.length)
  
  return repeat+bit


}
