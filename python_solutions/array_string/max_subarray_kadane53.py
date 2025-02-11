"""
53. Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

"""

class Solution:
    def maxSubArray(self, nums) -> int:
        max_current = float('-inf')
        max_global = float('-inf')

        for i in range(len(nums)):
            
            # Does adding this element improve the subarray?
            # If yes, continue the subarray.
            # If no, start a new subarray.
            max_current = max(nums[i], max_current + nums[i])

            # Is the best subarray we've just found better than all previous subarrays?
            # If yes, update the global maximum.
            # If no, keep the current global maximum.
            max_global = max(max_current, max_global)

        return max_global
        