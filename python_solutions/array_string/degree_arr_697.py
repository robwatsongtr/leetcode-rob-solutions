"""
697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the 
maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, 
that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6


"""


class Solution:
    def findShortestSubArray(self, nums) -> int:
        # get degree with frequency counter 
        count = {}
        for num in nums:
            count[num] = count.get(num, 0) + 1 

        degree = max(count.values())     

        # find all nums with that degree and put in array 
        nums_deg = []
        for key in count:
            if count[key] == degree:
                nums_deg.append(key)


        min_len = float('inf')
        
        # loop over array with nums that match degree
        # the key here is you get the length of the subarray
        # for each num by finding the first and last occurence of that
        # number bny having the first "trip" first, and the last
        # is the match you're left with at teh end of the traversal 
        for num in nums_deg:
            first_idx = None
            last_idx = None

            for i in range(len(nums)):
                if nums[i] == num:
                    if first_idx is None: 
                        first_idx = i

                    last_idx = i 

            length_subarr = last_idx - first_idx + 1

            min_len = min(min_len, length_subarr)

        return min_len