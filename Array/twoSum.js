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

  // iterate over array and build a hash table:
  // KEY is the complement!
  // VALUE is the index!
  // each iteration, you check back against what has already been placed in the hash map
  
  let result = [];

  let hashMap = {};

  for( let i = 0; i < nums.length; i++ ) {

    let complement = target - nums[i];

    if( complement in hashMap ) {
      result[0] = hashMap[complement];
      result[1] = i; 
    }

    hashMap[nums[i]] = i; 

  }

  return result; 

};

console.log( twoSum( [2,7,11,15], 9 ) );