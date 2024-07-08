"""
228. Summary Ranges

You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive). CONSECUTIVE NUMBERS

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, 
and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 
Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

"""

class Solution(object):
    def summaryRanges(self, nums):
        intervals = []
        i = 0 # marks the range 
        j = 0 # traverses the range 
        
        while j < len(nums):
            
            # while there's a consecutive range, increment j. 
            #
            # the condition ' j + 1 < len(nums) ' is because we are 
            # always checking one after and without that we would be checking out of bounds.
            while (j + 1) < len(nums) and nums[j + 1] == nums[j] + 1:
                j += 1

            # if range is a single number, just push that in. Else push in range
            if i == j:
                # intervals.append('{}'.format(nums[i])) # if < python 3.6
                intervals.append(f'{nums[i]}')
            else:
                # intervals.append('{}->{}'.format(nums[i], nums[j]))  # if < python 3.6
                intervals.append(f'{nums[i]}->{nums[j]}')

            # move j over by 1 to begin new range, and move i to j to mark new range 
            j += 1
            i = j

        return intervals 

        
