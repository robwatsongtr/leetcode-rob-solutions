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

var isPrefixString = function(s, words) {
    
};


console.log( isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"]))
console.log( isPrefixString("iloveleetcode", [ "apples", "i", "love", "leetcode"]))