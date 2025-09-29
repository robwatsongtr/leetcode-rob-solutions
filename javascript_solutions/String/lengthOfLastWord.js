/*
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the 
last word in the string.

A word is a maximal 
substring
consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.


Approach:

Remove spaces down to the point where you have a basic string with
only spaces between words and split string into an array of separate words

locate the last word in array

get the length of the word 


*/

var lengthOfLastWord = function(s) {
  // take care of leading, trailing, inbetween spaces 
  const processedStr = s.trim().split(' ') 

  const lastWord = processedStr[processedStr.length - 1]
  const length = lastWord.length

  return length

};


console.log( lengthOfLastWord("   fly me   to   the moon  "))