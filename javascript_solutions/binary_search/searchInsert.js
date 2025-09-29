/*
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

** where min ends up is the insertion position ** 

*/

var searchInsert = function(nums, target) { 
  let min = 0
  let max = nums.length - 1

  while( min <= max ) {
    let middle = Math.floor ( (min + max) / 2 )
    if( nums[middle] === target ) {
      return middle 
      // if middle is greater than target
      // search LEFT half 
    } else if ( nums[middle] > target ) {
      max = middle - 1
      // otherwise search RIGHT half 
    } else {
      min = middle + 1
    }
  }

  // If the target is not found, return the insertion position
  return min 
};
