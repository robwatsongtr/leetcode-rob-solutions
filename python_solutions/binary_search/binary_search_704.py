"""
Basic Binary Search. Return the index of the target number, or -1. 

The gotcha for me is the + 1 and the - 1 to exclude the current mid. 
If you don't do that you can get into an infinite loop because you keep checking the same mid. 

while lptr <= rptr guarantees that the binary search works correctly even when there's just one 
element left to examine. which is why you need it instead of while lptr < rptr 
"""
class Solution:
    def search(self, nums, target: int) -> int:
        min = 0
        max = len(nums) - 1

        while min <= max:
            mid = (min + max) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                max = mid - 1 #  the - 1 excludes the current mid
            else:
                min = mid + 1 # the + 1 excludes the current mid 

        return -1 
