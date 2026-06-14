function window(length, offset, list) {
  let result = [];

  if (length === 0) {
    
for (let i = 0; i <= list.length; i += offset) {
      
result.push([]);
   }
    return result;
  }

  for (let start = 0; start + length <= list.length; start += offset) {
    
    result.push(list.slice(start, start + length))
    
  }

  return result;
}
