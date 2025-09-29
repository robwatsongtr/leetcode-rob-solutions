// LC 1662. Check If Two String Arrays are Equivalent

/*
Given two string arrays word1 and word2, return true if the two 
arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements 
concatenated in order forms the string.

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.


*/

var arrayStringsAreEqual = function(word1, word2) {
  const concatWord1 = word1.join('')
  const concatWord2 = word2.join('')
  
  const result = concatWord1 === concatWord2 ? true : false

  return result 

};


console.log( arrayStringsAreEqual( ["ab", "c"], ["a", "cb"] ))

