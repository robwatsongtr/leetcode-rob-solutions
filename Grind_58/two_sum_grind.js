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
 
  iterate over array and build a hash table:

     build the hash map iteratively:
      **The KEY is the complement, the value is the index
  
  // each iteration, you check back against what has already been placed in the hash map
  
*/

var twoSum = (nums, target) => {
  let result = []
  let hashMap = {}
  console.log(`Target is ${target}`)

  for (let i = 0; i < nums.length; i++) {

    hashMap[nums[i]] = i;                   

    let complement = target - nums[i];      console.log(hashMap, `complement is ${complement}`)

    if( complement in hashMap ) {
      result[0] = hashMap[complement];
      result[1] = i; 
    }

  }

  return result
}

console.log( twoSum([2,7,11,15,], 9))