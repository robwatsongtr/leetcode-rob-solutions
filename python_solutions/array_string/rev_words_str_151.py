"""
151. Reverse Words in a String

Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
"""

class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.split()
        lp = 0
        rp = len(s) - 1

        while lp < rp:
            temp = s[lp]
            s[lp] = s[rp]
            s[rp] = temp
            lp += 1
            rp -= 1

        return " ".join(s)
    
# simpler, no temp. 
class Solution2:
    def reverseWords(self, s: str) -> str:
        s = s.split()
        l = 0
        r = len(s) - 1

        while l < r:
            s[l], s[r] = s[r], s[l]
            l += 1
            r -= 1

        return " ".join(s)