"""
392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

s is short string
t is long string 

A subsequence of a string is a new string that is formed from the original string 
by deleting some (can be none) of the characters without disturbing the relative 
positions of the remaining characters. 

"""

class Solution(object):
    def isSubsequence(self, s, t):
        sPtr = 0 
        tPtr = 0

        if len(s) > len(t): 
            return False
        if not s:
            return True  # An empty string is always a subsequence

        # while the long pointer hasnt reached the end of the long string: 
        while tPtr < len(t):
            # increment short pointer as long as there is a match
            # in long string / pointer
            if s[sPtr] == t[tPtr]: 
                sPtr += 1

            # no matter what increment long pointer to 'keep looking'
            tPtr += 1

            # we got to the end of the short string so its a subsequence
            if sPtr == len(s): 
                return True


        # didn't get to end of short string so not a subsequence
        return False 

        