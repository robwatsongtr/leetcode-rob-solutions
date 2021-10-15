// Reverse Words in a String III, LC 557

/*

Given a string s, reverse the order of characters in each word within a 
sentence while still preserving whitespace and initial word order.

*/

/**
 * @param {string} s
 * @return {string}
*/

/*

My approach:

1. separate words in to an array of words 
2. dequeue word from array 
3. reverse word
4. Push into result array 

*/

// Approach: basically Two Pointer, plus also a queue  


var reverseWords = function(s) {

  // Helper func--------------------------
  function reverseString(s) {

    let leftPtr = 0;
    let rightPtr = s.length - 1; 
   
    while( leftPtr < rightPtr) {
  
      let temp = s[leftPtr];
  
      // swap!
      s[leftPtr] = s[rightPtr]
      s[rightPtr] = temp;
  
      leftPtr++;
      rightPtr--;
  
    }
  
    // rejoin array of characters into string
    return s.join(""); 
  
  }
  //----------------------------------------
 
  let result = []

  // separate words into array
  let wordArray = s.split(' ');

  while( wordArray.length > 0 ) {

    // dequeue word, split into array of letters, then reverse 
    let revWord = reverseString( wordArray.shift().split('') );

    // push into result array 
    result.push(revWord);

  }

  // converts array of words into a proper  string with spaces between words.
  return result.join(' '); 
  
};

console.log( reverseWords("Hello to You") ) // olleH ot uoY