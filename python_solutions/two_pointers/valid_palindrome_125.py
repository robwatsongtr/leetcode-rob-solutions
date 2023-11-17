"""
Valid Palindrome LC 125

Given a string s, determine if it is a palindrome, considering 
only alphanumeric characters and ignoring cases.


"""

class Solution(object):
    def isPalindrome(self, s):
        # converts to lowercase, removes spaces and non alphanumeric characters
        s = "".join(char.lower() for char in s if char.isalnum())

        lp = 0
        rp = len(s) - 1

        while lp < rp: 
            if s[lp] != s[rp]:
                return False
            lp += 1
            rp -= 1

        return True 

        