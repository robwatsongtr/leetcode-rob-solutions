"""
3442. Maximum Difference Between Even and Odd Frequency I

You are given a string s consisting of lowercase English letters.

Your task is to find the maximum difference diff = freq(a1) - freq(a2) 
between the frequency of characters a1 and a2 in the string such that:

a1 has an odd frequency in the string.
a2 has an even frequency in the string.
Return this maximum difference.

Example 1:

Input: s = "aaaaabbc"

Output: 3

Explanation:

The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
The maximum difference is 5 - 2 = 3.

Example 2:

Input: s = "abcabcab"

Output: 1

Explanation:

The character 'a' has an odd frequency of 3, and 'c' has an even frequency of 2.
The maximum difference is 3 - 2 = 1.
"""

class Solution:
    def maxDifference(self, s: str) -> int:
        freq_map = {}

        for letter in s:
            freq_map[letter] = freq_map.get(letter, 0) + 1

        max_odd = float('-inf')
        min_even = float('inf')

        for val in freq_map.values():
            if val % 2 != 0:
                max_odd = max(val, max_odd)
            else:
                min_even = min(val, min_even)
    

        return max_odd - min_even 