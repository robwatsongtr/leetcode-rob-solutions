"""
219. Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct 
indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

"""

class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        hashmap = {}

        for i, num in enumerate(nums):
            # if there's a duplicate 
            if num in hashmap:
                # assign j to the index of the duplicate 
                j = hashmap[num]
                # check if it is k indicies away.
                if abs(i - j) <= k:
                    return True 

            # build the map 
            hashmap[num] = i

        return False 

# using range instead of enumerate in for loop 
class Solution2:
    def containsNearbyDuplicate(self, nums, k) -> bool:
        hashmap = {}

        for i in range(len(nums)):
            num = nums[i]

            if num in hashmap:
                j = hashmap[num]
                if abs(i - j) <= k:
                    return True 

            hashmap[num] = i

        return False 