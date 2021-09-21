/**
 * LC 217 Contains Duplicate 
 * 
 * Given an integer array nums, return true if any value appears at least twice 
 * in the array, and return false if every element is distinct.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */

// simple solution is to use a JS object as a hash map to keep track of the 
// frequency of values 

var containsDuplicate = function(nums) {
  let counter = {}
  
  // for of is used to iterate over arrays typically
  // the loop adds a frequency of each number to an object / hash map
  for(let val of nums) {
    counter[val] = ( counter[val] || 0 ) + 1;   
  }
  
  // for in is used to iterate over objects  
  // iterate over the counter object and see if there is more than one instance
  // of a value
  for( let key in counter ) {
    if( counter[key] > 1 ) return true;
  }

  // otherwise all values are distinct 
  return false; 
};

console.log( containsDuplicate([1,2,3,4]) ) // false
console.log( containsDuplicate([1,2,3,1]) ) // true
console.log( containsDuplicate([1,1,1,3,3,4,3,2,4,2]) ) // true
