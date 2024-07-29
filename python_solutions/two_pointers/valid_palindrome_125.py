"""
Valid Palindrome LC 125

Given a string s, determine if it is a palindrome, considering 
only alphanumeric characters and ignoring cases.


"""

class Solution(object):
    def isPalindrome(self, s):
        s = "".join(char.lower() for char in s if char.isalnum())

        l = 0
        r = len(s) - 1

        while l < r: 
            if s[l] != s[r]: return False
            l += 1
            r -= 1

        return True 

        