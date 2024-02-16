'''
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by 
using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote

'''


class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        ransom_dict = {}
        mag_dict = {}

        for val in ransomNote:
            ransom_dict[val] = ransom_dict.get(val, 0) + 1

        for val in magazine:
            mag_dict[val] = mag_dict.get(val, 0) + 1

        for key in ransom_dict:
            if not key in mag_dict:
                return False
            if ransom_dict[key] > mag_dict[key]:
                return False

        return True 