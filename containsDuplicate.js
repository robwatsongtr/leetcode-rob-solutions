/**
 * 
 * Given an integer array nums, return true if any value appears at least twice 
 * in the array, and return false if every element is distinct.
 * 
 * 
 * 
 * @param {number[]} nums
 * @return {boolean}
 */


 var containsDuplicate = function(nums) {
  let counter = {}
  
  // for of is used to iterate over arrays typically
  for(let val of nums) {
    counter[val] = (counter[val] || 0) + 1;   
  }
  
  // for in is used to iterate over objects  
  for(let key in counter) {
      if( counter[key] > 1) return true;
  }
  return false; 
};

