/*
LC 1961 Check If String Is a Prefix of Array

Given a string s and an array of strings words, determine whether s is a 
prefix string of words.

A string s is a prefix string of words if s can be made by concatenating 
the first k strings in words for some positive k no larger than words.length.

Return true if s is a prefix string of words, or false otherwise.

Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
Output: true
Explanation:
s can be made by concatenating "i", "love", and "leetcode" together.

Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
Output: false
Explanation:
It is impossible to make s using a prefix of arr.


 

*/

// Fails for : s ="a" words = ["aa","aaaa","banana"]
var isPrefixString = function(s, words) {
  const wordsStr = words.join('')
  for( let i = 0; i < s.length; i++) {
    if( s[i] !== wordsStr[i] ) return false
  }
  return true 
};


console.log( isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]))
console.log( isPrefixString("iloveleetcode", [ "apples", "i", "love", "leetcode"]))

// GPT: 
/*
This updated code iterates through the words array, progressively building 
currentStr by concatenating the strings. It checks at each step if currentStr 
matches s. If currentStr becomes longer than s or if it no longer matches 
the prefix of s, it returns false. If a match is found, it returns true. 
If the loop finishes without finding a match, it returns false.

With this fix, the updated code should produce the correct output 
for the given test case.

In this case, s.slice(0, currentStr.length) is used to extract the substring of 
s starting from index 0 up to the length of currentStr. It essentially creates 
a substring that has the same length as the current concatenation of words.

The purpose of this comparison currentStr !== s.slice(0, currentStr.length) 
is to check if the current concatenation matches the prefix of s. 
If they are not equal, it means that the prefix formed by concatenating 
words does not match the corresponding prefix of s, and therefore it is 
not possible to form s using a prefix of words.

*/
var isPrefixString2 = function(s, words) {
  let currentStr = '';
  for (let i = 0; i < words.length; i++) {
    currentStr += words[i];
    if (currentStr === s) {
      return true;
    }
    if (currentStr.length > s.length || currentStr !== s.slice(0, currentStr.length)) {
      return false;
    }
  }
  return false;
};
