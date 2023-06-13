// LC 2185. Counting Words With a Given Prefix


/*
You are given an array of strings words and a string pref
Return the number of strings in words that contain pref as a prefix.
A prefix of a string s is any leading contiguous substring of s.

Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

*/

var prefixCount = function(words, pref) {
  let count = 0
  for ( let word of words ) {
    if( word.startsWith(pref) ) count++
  }
  return count 
};


console.log( prefixCount(["pay","attention","practice","attend"], 'at'))

console.log( prefixCount(["leetcode","win","loops","success"], "code"))