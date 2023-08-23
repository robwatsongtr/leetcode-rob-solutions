/*
1967. Number of Strings That Appear as Substrings in Word

Given an array of string patterns and a string word, return the number of strings 
in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: patterns = ["a","abc","bc","d"], word = "abc"
Output: 3
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.

Example 2:

Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
Output: 2
Explanation:
- "a" appears as a substring in "aaaaabbbbb".
- "b" appears as a substring in "aaaaabbbbb".
- "c" does not appear as a substring in "aaaaabbbbb".
2 of the strings in patterns appear as a substring in word.

Example 3:

Input: patterns = ["a","a","a"], word = "ab"
Output: 3
Explanation: Each of the patterns appears as a substring in word "ab".

This is an implementation of the "Naive String Matching Algorithm"

*/

const numOfStrings = (strs, word) => {

  function naiveStringSearch(str, text) {

    const strLen = str.length
    const textLen = text.length

    // main loop loops until string matches up to end of word
    for( let i = 0; i <= textLen - strLen; i++  ) {

      let strPtr = 0 // pointer to loop each character of str

      // while not the length of str AND the text of str matches with the text of 'text
      while( strPtr < strLen && text[i + strPtr] === str[strPtr] ) {
        strPtr++ 
      }
      if( strPtr === strLen ) {
        return true  // we reached the end of str because the pointers match, substr found!
      }
    }

    return false
  }


}