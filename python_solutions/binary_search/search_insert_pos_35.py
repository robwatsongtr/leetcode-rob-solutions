"""
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index 
if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
"""

class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        # these are indicies!! not actual values 
        min = 0
        max = len(nums) - 1

        while min <= max:
            middle = (min + max) // 2

            if nums[middle] == target:
                return middle # return index 
            
            if nums[middle] < target:
                min = middle + 1
            else:
                max = middle - 1

        # 'min' represents the first index in the array where the target could be inserted 
        # without violating the sorted order. 'max' might violate the sorted order. 
        return min 