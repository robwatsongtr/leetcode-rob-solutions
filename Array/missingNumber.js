/*
  BIT MANIPULATION

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are 
in the range [0,3]. 2 is the missing number in the range since it does 
not appear in nums.

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
2 is the missing number in the range since it does not appear in nums.

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
8 is the missing number in the range since it does not appear in nums.

XOR:
Algo: 

xor all the numbers in the array by all the numbers that should be in the array,
what's left is the missing number, because a number xor'ed by itself is zero.

the numbers in the array are nums[i], the numbers that should be in the array (+1) is
nums.length becauze zero indexing. CLEVER!

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let missing = nums.length
  console.log(missing)
  for( let i = 0; i < nums.length; i++) {
    missing ^= i ^nums[i]
  }
  return missing 
};

console.log( missingNumber([9,6,4,2,3,5,7,0,1]) )