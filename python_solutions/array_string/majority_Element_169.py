"""
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
 You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

"""

class Solution(object):
    def majorityElement(self, nums):
        my_dict = {}
        # // divides and rounds down 
        majority_size = len(nums) // 2

        # get frequency map
        for val in nums:
            my_dict[val] = my_dict.get(val, 0) + 1

        for key in my_dict:
            if my_dict.get(key) > majority_size:
                return key
                