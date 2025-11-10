"""
1832. Check if the Sentence Is Pangram

A pangram is a sentence where every letter of the English alphabet appears at 
least once.

Given a string sentence containing only lowercase English letters, return true if 
sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false

"""

class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        letters = {chr(i) : False for i in range(ord('a'), ord('z') + 1)}

        for i in range(len(sentence)):
            char = sentence[i]
            letters[char] = True 

        for key in letters:
            if letters[key] == False:
                return False

        return True 
    
class Solution2:
    def checkIfPangram(self, sentence: str) -> bool:
        return len(set(sentence)) == 26
    
    