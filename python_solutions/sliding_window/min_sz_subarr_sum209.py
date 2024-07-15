"""
209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

"""

class Solution:
    def minSubArrayLen(self, target, nums):
        lptr = 0
        rptr = 0
        minLength = float('inf')
        sum = 0

        # initally this expands the window from the start until the target is reached
        # but inner loop falls back to this to move the window border right
        while rptr < len(nums):
            sum += nums[rptr]
            rptr += 1

            # contracts window border from the left when the sum is greater than or equal 
            # to target and keeps a running minimum 
            while sum >= target:
                minLength = min(minLength, rptr - lptr)
                sum -= nums[lptr]
                lptr += 1

        if minLength == float('inf'):
            return 0
        else:
            return minLength