function chain(input, fs) {

return fs.reduce((cV,cF)=>{
  return cF(cV)
},input)

}
