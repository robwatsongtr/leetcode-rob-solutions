"""
520. Detect Capital

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false

"""

class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if word.lower() == word:
            return True
        
        if word.upper() == word:
            return True 

        if word[0] == word[0].upper():
            for i in range(1, len(word)):
                if word[i] != word[i].lower():
                    return False
            return True

        return False 

# using slicing instead of a loop
class Solution2:
    def detectCapitalUse(self, word: str) -> bool:
        if word.lower() == word:
            return True
        
        if word.upper() == word:
            return True 

        if word[0].isupper() and word[1:].islower():
            return True 

        return False 
    
class Solution3:
    def detectCapitalUse(self, word: str) -> bool:
        return word.lower() == word or word.upper() == word or (word[0].isupper() and word[1:].islower())
        


       