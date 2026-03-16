function roomMates( rooms, floor ) {
  
  let start = (floor - 1)*6
  let end = floor * 6
  
  return rooms
  .slice(start,end)
  .filter((n) => n!=="")
  
  
  
}
