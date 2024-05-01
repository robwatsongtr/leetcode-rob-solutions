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

        # if a character in s isn't mapped to a character in t, do so and add it to map
        # if that characer is in the map and its mapped to a different character, return false
        # 
        # enumerate returns a tuple, index and the item itself!!
        for i, charS in enumerate(s):
            charT = t[i]

            if charS not in dict_s:
                dict_s[charS] = charT
            else:
                if dict_s[charS] != charT:
                    return False

            if charT not in dict_t:
                dict_t[charT] = charS
            else:
                if dict_t[charT] != charS:
                    return False

        return True 




