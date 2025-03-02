"""
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product
 of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
"""

"""
Approach is to calculate all the prefix sums, then calculate the suffix sums, and while
calculating the suffix sums multiply the suffix sums with the prefix sums. 
"""
class Solution:
    def productExceptSelf(self, nums):
        answer = [1] * len(nums)

        # calculate prefix sums and store in answer array
        left_product = 1 # keeps track of running product 
        for i in range(len(nums)):
            # this places the current accumulation in answer array 
            answer[i] = left_product
            # this accumulates the multiplications 
            left_product *= nums[i]

        # calculate suffix sums, and ***multiply against what's in the answer array**
        right_product = 1 # keeps track of running product 
        for i in range(len(nums) - 1, -1, -1):
                    # *=
            answer[i] *= right_product
            right_product *= nums[i]

        return answer 