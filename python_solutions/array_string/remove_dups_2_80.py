



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
        