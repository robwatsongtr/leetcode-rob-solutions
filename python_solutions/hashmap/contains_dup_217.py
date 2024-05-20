"""

217. Contains Duplicate

Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.

"""

class Solution:
    def containsDuplicate(self, nums) -> bool:
        hashmap = {}

        for num in nums:
            if num in hashmap:
                return True 

            hashmap[num] = True

        return False