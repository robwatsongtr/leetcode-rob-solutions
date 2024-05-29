"""
27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums 
in-place. The order of the elements may be changed. Then return the number of elements 
in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get 
accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements 
which are not equal to val. The remaining elements of nums are not important as well 
as the size of nums.

Return k.


"""

class Solution(object):
    def removeElement(self, nums, val):
        left = 0

        for right in range(0, len(nums)):
            # if right is the value, skip it and loop to next element 
            if nums[right] == val:
                continue
            else:
                # it's not the val so copy left to right 
                nums[left] = nums[right]
                
            left += 1
        
        return left 

        