"""
55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each 
element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it 
impossible to reach the last index.

"""

# Greedy solution:
'''
Farthest Reach: As you iterate through the array, you greedily update farthest, the maximum index you can 
reach from any position encountered so far. The decision to update farthest is made at each step based on 
how far the current position can take you, without considering what might happen after this step.
'''
class Solution:
    def canJump(self, nums) -> bool:
        furthest = 0

        for i in range(len(nums)):
            if i > furthest: 
                return False 

            furthest = max(furthest, nums[i] + i)
            
        return furthest >= len(nums) - 1
    

# logic more explicit 
class Solution:
    def canJump(self, nums) -> bool:
        furthest = 0

        for i in range(len(nums)):
            if i > furthest:
                return False

            furthest = max(furthest, nums[i] + i)

        if furthest >= len(nums) - 1:
            return True 

        return False 