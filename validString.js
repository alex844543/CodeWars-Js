var validWord = function(dictionary, word) {

  function canBreak(str) {
    if (str === "") return true;  

    for (let w of dictionary) {
      if (str.startsWith(w)) {
        if (canBreak(str.slice(w.length))) {
          return true;
        }
      }
    }

    return false;
  }

  return canBreak(word);
};
