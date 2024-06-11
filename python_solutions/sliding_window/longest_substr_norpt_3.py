"""
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substringvwithout repeating characters.

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
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

"""


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l_ptr = 0
        r_ptr = 0
        unique = set()
        max_len = 0

        while r_ptr < len(s):
            if s[r_ptr] not in unique:
                unique.add(s[r_ptr])
                r_ptr += 1
                max_len = max(max_len, len(unique))
            else:
                unique.remove(s[l_ptr])
                l_ptr += 1

        return max_len