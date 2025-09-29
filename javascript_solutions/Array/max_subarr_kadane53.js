/*
LC 53 Maximum Subarray

Given an integer array nums, find the contiguous subarray (
  containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

The method to solve is called Kadane's Algorithm, a dynamic algo. 

*/



/**
 * @param {number[]} nums
 * @return {number}
*/


const maxSubArray = (nums) => {
  // starting max sum is the first element in array
  let max_sum = nums[0]; 

  // set current to first element;
  let current_sum = max_sum; 

  // start looping from the second element 
  for( let i = 1; i < nums.length; i++ ) {

    // add on to subarray, or start a new sum? 
    // (pick the greater of:the current index, or current index plus what came beore it)
    current_sum = Math.max( nums[i] + current_sum, nums[i] )

    // if current sum is greater than max sum, we update max sum
    max_sum = Math.max( current_sum, max_sum)

    // console.log(max_sum);

  }

  return max_sum; 


};

console.log( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) )