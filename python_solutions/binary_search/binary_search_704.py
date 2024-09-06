"""
Basic Binary Search. Return the index of the target number, or -1. 

The gotcha for me is the + 1 and the - 1 to exclude the current mid. 
If you don't do that you can get into an infinite loop because you keep checking the same mid. 

while lptr <= rptr guarantees that the binary search works correctly even when there's just one 
element left to examine. which is why you need it instead of while lptr < rptr 
"""
class Solution:
    def search(self, nums, target: int) -> int:
        lptr = 0
        rptr = len(nums) - 1

        while lptr <= rptr:
            mid_idx = (lptr + rptr) // 2

            if nums[mid_idx] == target:
                return mid_idx
            elif nums[mid_idx] > target:
                rptr = mid_idx - 1 #  the - 1 excludes the current mid
            else:
                lptr = mid_idx + 1 # the + 1 excludes the current mid 

        return -1 
