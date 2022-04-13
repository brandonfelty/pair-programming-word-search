//receive a 2D array of letters and a word 
// - check to find the word horizontally and vertically 
// - return true if the word is found, and return false if the word is not found 

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  // console.log(horizontalJoin);
  for (const l of horizontalJoin) {
      if (l.includes(word)) return true
  }
  // vertical Join 
  const vertical = function (array) {
      let resultsVertical = [];
      for( let i = 0; i < array[0].length; i++) {
          let newRow = "";
          for (let j = 0; j < array.length; j++) {
              newRow += array[j][i];
          }
          resultsVertical.push(newRow); 
      }
      return resultsVertical;
  }
  const verticalJoin = vertical(letters);
  // console.log('verticalJoin:',verticalJoin);
  
  for (const l of verticalJoin) {
      if (l.includes(word)) return true
  }
  
  return false;

}

module.exports = wordSearch