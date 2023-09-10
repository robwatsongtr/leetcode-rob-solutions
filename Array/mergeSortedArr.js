/*
88. Merge Sorted Array
Easy

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two
 integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored 
inside the array nums1. To accommodate this, __nums1 has a length of m + n___, 
where the first m elements denote the elements that should be merged, and the last n e
lements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

*/

const { mergeRefs } = require("react-admin")

const merge = (nums1, m, nums2, n) => {

  // initialize two pointers that start at the end of both arrays
  // where p1 is where the numbers end before zeros in nums1:  m-1
  // p2 is where the numbers end in nums2: n - 1
  //
  // initialize pointer i to write write to at (very end of nums 1), which is m + n - 1
  let p1 = m - 1
  let p2 = n - 1
  let i = m + n -1 

  // while loop breaks out when p2 hits the end of nums2
  while( p2 > 0 ) {
    
  }
  

}