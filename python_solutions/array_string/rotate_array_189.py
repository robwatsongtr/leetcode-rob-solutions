"""
189. Rotate Array

Hint
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
"""

class Solution:
    def rotate(self, nums, k) -> None:
        def reverse(start, end):
            while start < end:
                temp = nums[start]
                nums[start] = nums[end]
                nums[end] = temp
                start += 1
                end -= 1

        k %= len(nums)  # in case k is larger than the size of the array, 
                        # modulo wraps around to the equivalent rotation less than
                        # length of array        

        # where the magic happens. You need three reversals to rotate an array by k steps:
        reverse(0, len(nums) - 1) # reverse entire array
        reverse(0, k - 1) # reverse first k elements
        reverse(k, len(nums) - 1) # reverse the rest of array

    
