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

Input: patterns = ["a","a","a"], word = "ab"
Output: 3
Explanation: Each of the patterns appears as a substring in word "ab".

This is variation on the Naive String Matching Algorithm

*/



const numOfStrings = (patterns, word) => {

  function stringMatch(str, word) {
    const strLen = str.length
    const textLen = word.length

    for( let i = 0; i <= textLen - strLen; i++  ) {
      let strPtr = 0 // pointer to loop each character of str
      while( strPtr < strLen && word[i + strPtr] === str[strPtr] ) {
        strPtr++ 
      }
      if( strPtr === strLen ) {
        return true  
      }
    }

    return false
  }

  let count = 0
  for( let i = 0; i < patterns.length; i++) {
    let result = stringMatch( patterns[i], word )
    if(result) count++
  }

  return count 
}




console.log( numOfStrings( ["a","abc","bc","d"], "abc") )