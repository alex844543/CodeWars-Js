function vaporcode(string) {
  
  let str = string.replace(/\s+/g,"").toUpperCase().split('').join('  ')
  return str
  
  
}
