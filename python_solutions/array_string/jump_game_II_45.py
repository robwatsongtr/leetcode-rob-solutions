"""
45. Jump Game II

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, 
if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you 
can reach nums[n - 1].

"""

class Solution:
    def jump(self, nums) -> int:
        furthest = 0
        jumps = 0
        current_range_end = 0

        for i in range(len(nums) - 1):
            #whereever you currenly at, calculate the furthest you can jump
            furthest = max(furthest, nums[i] + i)

            # if where we are currently at, if it matches the end of the current range,
            # reset current_range_end to the furthest from where we are at and increment jump
            if i == current_range_end:
                jumps += 1
                current_range_end = furthest

            # we've reached the last index,no more iterations, return jumps
            if current_range_end >= len(nums) - 1:
                break

        return jumps