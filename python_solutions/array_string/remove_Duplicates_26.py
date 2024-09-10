"""
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates 
in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, 
you need to do the following things:

Change the array nums such that the first k elements of nums contain 
the unique elements in the order they were present in nums initially.
The remaining elements of nums are not important as well as the size of nums.

Return k.

"""

class Solution:
    def remove_duplicates(self, nums):
        if len(nums) == 0:
            return 0

        k_unique = 1  
        i_dups = 1  

        while i_dups < len(nums):
            # if this if is true duplicate run has ended so copy over the new non dup number
            # next to the last non dup number 
            #
            # So essentially k places the next non unique number, and i searches for the 
            # next unique number, which is after the end of a duplicate run 
            if nums[i_dups] != nums[k_unique - 1]:
                nums[k_unique] = nums[i_dups]
                k_unique += 1
                
            i_dups += 1 # this keeps incrementing as long as there are duplicates 

        return k_unique
    

# more concise:
class Solution:
    def removeDuplicates(self, nums) -> int:
        l = 1

        for r in range(1, len(nums)):
            if nums[r] != nums[l - 1]:
                nums[l] = nums[r]
                l += 1

        return l 
