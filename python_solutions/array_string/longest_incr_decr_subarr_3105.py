"""



"""
from typing import List 

# brute force
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        max_incr = 1
        max_decr = 1

        for i in range(0, len(nums)):
            for j in range(i, len(nums) - 1):
                if nums[j] >= nums[j + 1]:                                       
                    break
                max_incr = max(max_incr, j - i + 2)

        for i in range(0, len(nums)):
            for j in range(i, len(nums) - 1):
                if nums[j] <= nums[j + 1]:                                      
                    break
                max_decr = max(max_decr, j - i + 2)

        return max(max_incr, max_decr)
    

    # O(n) greedy
    class Solution:
        def longestMonotonicSubarray(self, nums: List[int]) -> int:
            max_incr = 1
            max_decr = 1
            curr_incr = 1
            curr_decr = 1

            # don't forget to start on 1 becasue backwards comparisson 
            for i in range(1, len(nums)):
                if nums[i] > nums[i - 1]:
                    curr_incr += 1
                else:
                    curr_incr = 1
                # need to check outside else in case the streak goes to end of array 
                max_incr = max(curr_incr, max_incr)

                if nums[i] < nums[i - 1]:
                    curr_decr += 1
                else:
                    curr_decr = 1
                # need to check outside else in case the streak goes to end of array 
                max_decr = max(curr_decr, max_decr)

            
            return max(max_incr, max_decr)