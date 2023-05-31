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
    
  }

  return result 

};


console.log( findWords(["Hello","Alaska","Dad","Peace"]))