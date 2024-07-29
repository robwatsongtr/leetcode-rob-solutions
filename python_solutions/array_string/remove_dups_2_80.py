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
    def remove_duplicates(nums):
        if len(nums) <= 2:
            return len(nums)

        k_unique = 2  # Start from the third element
        i_dups = 2  # Start from the third element in the list

        while i_dups < len(nums):
            if nums[i_dups] != nums[k_unique - 2]:
                nums[k_unique] = nums[i_dups]
                k_unique += 1   
            i_dups += 1

        return k_unique