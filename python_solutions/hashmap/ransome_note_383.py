'''
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by 
using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote

'''


class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        if len(ransomNote) > len(magazine):
            return False 

        ransom_dict = {}
        mag_dict = {}

        for val in ransomNote:
            ransom_dict[val] = ransom_dict.get(val, 0) + 1

        for val in magazine:
            mag_dict[val] = mag_dict.get(val, 0) + 1

        for key in ransom_dict:
            if key not in mag_dict:
                return False
            if ransom_dict[key] > mag_dict[key]:
                return False

        return True 
    

class Solution2(object):
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        def make_counter(iterable):
            hashmap = {}
            for i in iterable:
                hashmap[i] = hashmap.get(i, 0) + 1
            return hashmap

        ransom_counter = make_counter(ransomNote)
        mag_counter = make_counter(magazine)

        for key in ransom_counter:
            if key not in mag_counter or ransom_counter[key] > mag_counter[key]:
                return False

        return True 