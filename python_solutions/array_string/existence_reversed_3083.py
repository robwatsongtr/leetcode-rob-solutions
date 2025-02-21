"""
3083. Existence of a Substring in a String and Its Reverse

Given a string s, find any  substringof length 2 which is also present in the reverse of s.

Return true if such a substring exists, and false otherwise.


Example 1:

Input: s = "leetcode"
Output: true
Explanation: Substring "ee" is of length 2 which is also present in reverse(s) == "edocteel".

Example 2:
Input: s = "abcba"
Output: true
Explanation: All of the substrings of length 2 "ab", "bc", "cb", "ba" are also present in reverse(s) == "abcba".

Example 3:

Input: s = "abcd"
Output: false
Explanation: There is no substring of length 2 in s, which is also present in the reverse of s


"""

#  SLIDING WINDOW USING SLICING

class Solution:
    def isSubstringPresent(self, s: str) -> bool:
        rev_s = s[::-1]

        for i in range(len(s) - 1):
            if s[i:i+2] in rev_s:
                return True

        return False

            
if __name__ == "__main__":
    sol = Solution()

    str = "abcd"

    print(sol.isSubstringPresent(str))
