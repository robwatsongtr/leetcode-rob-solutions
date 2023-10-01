/* 
228. Summary Ranges

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

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

Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"


Approach: 

Outer loop, while loop inside that runs the consecutive range until consecutive range ends
When range ends, copy start and end of range into intervals array in string format "a->b"

*/

const summaryRanges = (nums) => {
  let intervals = []

  let i = 0 
  let j = 0

  while( j < nums.length ) {
    
    // find end of consecutive range 
    while( j + 1 < nums.length && nums[j + 1] === (nums[j] + 1) )  {
      j++
    }

    // takes care of no consecutive 
    if( i === j) {
      intervals.push(`${nums[i]}`)
      // push in range 
    } else {
      intervals.push(`${nums[i]}->${nums[j]}`) 
    }

    j++ // move j over by 1
    i = j // move i to where j is to mark beginning of next range 


  }

  return intervals
 
};

console.log( summaryRanges( [0,1,2,4,5,7]) )