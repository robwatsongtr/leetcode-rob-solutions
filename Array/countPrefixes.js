// 2255. Count Prefixes of a Given String
/*

You are given a string array words and a string s, where words[i] and s 
comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. 
A substring is a contiguous sequence of characters within a string.

Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
Output: 3
Explanation:
The strings in words which are a prefix of s = "abc" are:
"a", "ab", and "abc".
Thus the number of strings in words which are a prefix of s is 3.

Pattern: Hash Table lookup  

*/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  let count = 0
  for( let i of words ) {
    if(s.startsWith(i)) count++
  }
  return count 
};


console.log( countPrefixes(["a","b","c","ab","bc","abc"], "abc"))