/*

Given a non-empty array of integers nums, every element appears twice 
except for one. Find that single one.

You must implement a solution with a linear runtime complexity a
and use only constant extra space.

My approach: frequency counter / hash map 

*/



/**
 * @param {number[]} nums
 * @return {number}
*/


var singleNumber = function(nums) {
    
  // step  1, turn array into hash map (JS object in this case) 
  // will use 'for of' to iterate over the array 
  let hashmap = {}; 
  for( let val of nums ) {
    hashmap[val] = (hashmap[val] || 0) + 1; 
  }
  console.log(hashmap);


};

