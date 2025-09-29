"""
560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number 
of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array


Answer: Calculate prefix sums on the fly and store them in a frequency map

Intuition:

So when you store prefix sums in the hash map, you're storing potential 
starting points for subarrays that will end at future positions.
The magic: When you reach a new position and calculate current_prefix_sum - k, 
you're asking "which of my stored prefix sums would create a valid subarray 
ending here?" And the frequency tells you exactly how many such subarrays exist.

"""


class Solution:
    def subarraySum(self, nums, k) -> int:
        # A total of zero is always present as a reference point 
        # so as to to allow subarrays that start at index 0 to be counted.
        p_sum_counter = {0: 1}  
        running_sum = 0
        count = 0

        for num in nums:
            running_sum += num
            target = running_sum - k

            if target in p_sum_counter:
                count += p_sum_counter[target]
                
            p_sum_counter[running_sum] = p_sum_counter.get(running_sum, 0) + 1

        return count