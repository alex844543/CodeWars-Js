var sing = function () {
  let lyrics = [];

  for (let i = 99; i > 0; i--) {
  
    lyrics.push(`${i} bottle${i === 1 ? '' : 's'} of beer on the wall, ${i} bottle${i === 1 ? '' : 's'} of beer.`);
    
   
    lyrics.push(`Take one down and pass it around, ${i-1 === 0 ? 'no more' : i-1} bottle${i-1 === 1 ? '' : 's'} of beer on the wall.`);
  }

  
  lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
  lyrics.push("Go to the store and buy some more, 99 bottles of beer on the wall.");

  return lyrics;
};
