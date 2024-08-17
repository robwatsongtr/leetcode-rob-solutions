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
# positive logic version 
class Solution(object):
    def removeElement(self, nums, val):
        l = 0

        for r in range(len(nums)):
            # if right is the value, skip it and loop to next element 
            if nums[r] == val:
                continue
            
            # it's not the val so copy left to right and increment left 
            nums[l] = nums[r]  
            l += 1
        
        return l 


# negative logic version
class Solution:
    def removeElement(self, nums, val: int) -> int:
        lp = 0
        
        for rp in range(len(nums)):
            if nums[rp] != val:
                nums[lp] = nums[rp]
                lp += 1

        return lp

        
        