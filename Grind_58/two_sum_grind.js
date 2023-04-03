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
 * 
 
 // iterate over array and build a hash table:
  // KEY is the complement!
  // VALUE is the index!
  // each iteration, you check back against what has already been placed in the hash map
  // build the hash map iteratively:
    // The key is the complement, the value is the index
*/

var twoSum = (nums, target) => {
  let result = []
  let hashMap = {}
  for (let i = 0; i < nums.length; i++) {

    
  }

  return result
}