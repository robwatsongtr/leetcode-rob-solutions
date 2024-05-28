"""
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once.


 
"""

class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        
        s_freq = {}
        t_freq = {}

        for letter in s:
            s_freq[letter] =  s_freq.get(letter, 0) + 1

        for letter in t:
            t_freq[letter] = t_freq.get(letter, 0) + 1

        for key in s_freq:
            # check for same characters
            if key not in t_freq:
                return False
            # check for same frequency
            if s_freq[key] != t_freq[key]:
                return False 

        return True 
        
class Solution2(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        
        def counter(string):
            hashmap = {}

            for char in string:
                hashmap[char] = hashmap.get(char, 0) + 1

            return hashmap

        s_map = counter(s)
        t_map = counter(t)

        for key in s_map:
            if key not in t_map:
                return False
            else:
                if s_map[key] != t_map[key]:
                    return False

        return True  
