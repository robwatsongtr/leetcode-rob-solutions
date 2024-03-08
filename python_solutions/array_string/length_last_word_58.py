"""
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the 
last word in the string.

A word is a maximal substring consisting of non-space characters only.

"""

class Solution(object):
    def lengthOfLastWord(self, s):
        processed_str = s.strip().split()
        
        last_word = processed_str[-1]
        length = len(last_word)

        return length 
    
# one liner 
class Solution2(object):
    def lengthOfLastWord(self, s):
        return len(s.strip().split()[-1])