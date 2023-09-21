/**
 * 
 * Given an array of integers nums and an integer target, return indices of 
 * the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you 
 * may not use the same element twice.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

var twoSum = function(nums, target) {
  let map = {}

  for( let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    // complement is what you need to add to target
    let complement = target - currentNum

    // return indicies of the two numbers 
    if( complement in map ) {
      return [ map[complement], i ]
    }

    // build map iteratively 
    // key is current number, value is index
    map[currentNum] = i
  } 

  return result  
};

console.log( twoSum( [2,7,11,15], 9 ) );