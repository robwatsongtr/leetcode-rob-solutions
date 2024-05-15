"""
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced 
to get t.

All occurrences of a character must be replaced with another character 
while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 
Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true

"""

class Solution(object):
    def isIsomorphic(self, s, t):
        if len(s) != len(t):
            return False

        dict_s = {}
        dict_t = {}

        
        # enumerate returns a tuple, index and the item itself!!
        for i, charS in enumerate(s):
            charT = t[i]

            # if character in s isn't in its dictionary yet
            if charS not in dict_s:
                # add it and assign it to the corresponding character t index 
                dict_s[charS] = charT
            else:
                # if the character s is in the dict and its assigned to a different
                # character, return false 
                if dict_s[charS] != charT:
                    return False

            # if a character in t isn't in its dictionary yet
            if charT not in dict_t:
                # add it and assign it to the corresponding character in s index 
                dict_t[charT] = charS
            else:
                # if the character t is in the dict and its assigned to a different
                # character, return false 
                if dict_t[charT] != charS:
                    return False

        return True 




