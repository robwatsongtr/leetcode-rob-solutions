/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring
without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring

*/

var lengthOfLongestSubstring = function(s) {
    let lptr = 0
    let rptr = 0
    let unique = new Set()
    let maxLen = 0

    while (rptr < s.length) {
        if (!(unique.has(s[rptr]))) {
            unique.add(s[rptr])
            rptr++
            maxLen = Math.max(maxLen, unique.size)
        } else {
            unique.delete(s[lptr])
            lptr++
        }
    }

    return maxLen 
};