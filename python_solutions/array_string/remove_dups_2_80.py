"""

80. Remove Duplicates from Sorted Array II

Given an integer array nums sorted in non-decreasing order, remove some duplicates
 in-place such that each unique element appears at most twice. 
 The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying 
the input array in-place with O(1) extra memory.
"""



class Solution:
    def removeDuplicates(self, nums):
        if len(nums) <= 2:
            return len(nums)

        i = 2
        j = 2

        while i < len(nums):
            if nums[i] == nums[j - 2]:
                i += 1
            else:
                nums[j] = nums[i]
                i += 1
                j += 1

        return j      
        