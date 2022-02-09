/*
LC 53 Maximum Subarray

Given an integer array nums, find the contiguous subarray (
  containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

The method to solve is called Kadane's Algorithm, a dynamic algo. 

*/

const { Z_NO_COMPRESSION } = require("zlib");

/**
 * @param {number[]} nums
 * @return {number}
*/


const maxSubArray = (nums) => {
  let max_sum = nums[0]; // starting max sum is the first element in array
  let current_sum = max_sum; // set current to first element;

  for( let i = 1; i < nums.length; i++ ) {
    
  }



};

