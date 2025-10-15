"""
2937. Make Three Strings Equal

You are given three strings: s1, s2, and s3. In one operation you can choose one of 
these strings and delete its rightmost character. Note that you cannot completely e
pty a string.

Return the minimum number of operations required to make the strings equal. 
If it is impossible to make them equal, return -1.

 
Example 1:

Input: s1 = "abc", s2 = "abb", s3 = "ab"

Output: 2

Explanation: Deleting the rightmost character from both s1 and s2 will result in 
three equal strings.

Example 2:

Input: s1 = "dac", s2 = "bac", s3 = "cac"

Output: -1

Explanation: Since the first letters of s1 and s2 differ, they cannot be made equal
"""

class Solution:
    def findMinimumOperations(self, s1: str, s2: str, s3: str) -> int:
        strings_list = [s1, s2, s3]
        prefix = strings_list[0]

        for s in strings_list:
            while not s.startswith(prefix):
                prefix = prefix[:-1]
                
            if not prefix:
                return -1

        prefix_len = len(prefix)
        opers = (len(s1) - prefix_len) + (len(s2) - prefix_len) + (len(s3) - prefix_len)

        return opers 
