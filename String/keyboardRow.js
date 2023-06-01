/*
LC 500 Keyboard Row

Given an array of strings words, return the words that can be typed 
using letters of the alphabet on only one row of American keyboard 
like the image below.

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

*/

var findWords = function(words) {
  const row1 = ["q","w","e","r","t","y","u","i","o","p"];
  const row2 = ["a","s","d","f","g","h","j","k","l"];
  const row3 = ["z","x","c","v","b","n","m"];

  let result = []

  for( let word of words ) {
    let isInRow1 = true;
    let isInRow2 = true;
    let isInRow3 = true;
    // Need to check if ALL the characters of a word are in the same row.
    // add a flag for each row and break the loop 
    // if any character is found in a different row.
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toLowerCase();
      if (!row1.includes(char)) {
        isInRow1 = false;
      }
      if (!row2.includes(char)) {
        isInRow2 = false;
      }
      if (!row3.includes(char)) {
        isInRow3 = false;
      }
      if (!isInRow1 && !isInRow2 && !isInRow3) {
        break;
      }
    }

    if (isInRow1 || isInRow2 || isInRow3) {
      result.push(word);
    }
    
  }

  return result 

};


console.log( findWords(["Hello","Alaska","Dad","Peace"]))