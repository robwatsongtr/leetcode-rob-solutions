"""
290. Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter 
in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

"""
class Solution(object):
    def wordPattern(self, pattern, s):
        hashmap = {}
        words = s.split()

        if len(words) != len(pattern):
            return False 

        for i, word in enumerate(words):
            pattern_char = pattern[i]
            
            # If letter is in hashmap, check if it's associated with the current word
            # if not return False
            if pattern_char in hashmap:
                if hashmap[pattern_char] != word:
                    return False    
            else:  
                # If word is already associated with another letter, return False
                if word in hashmap.values():
                    return False
            
            # Build the hashmap
            hashmap[pattern_char] = word
        
        return True

# shorter solution using zip
class Solution(object):
    def wordPattern(self, pattern, s):
        words = s.split()
        hashmap = {}

        if len(words) != len(pattern):
            return False 

        for word, pattern_char in zip(words, pattern):
            if pattern_char in hashmap:
                if hashmap[pattern_char] != word:
                    return False
            elif word in hashmap.values():
                return False 

            hashmap[pattern_char] = word
        
        return True 