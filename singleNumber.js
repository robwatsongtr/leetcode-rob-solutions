/*
Leetcode 136: Single Number

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

// opps not O(1) extra space

var singleNumber = function(nums) {
  let hashmap = {}; 
  for( let val of nums ) {
    hashmap[val] = (hashmap[val] || 0) + 1; 
  }
  for( let key in hashmap ) {
    if( hashmap[key] < 2 ) {
      return key; 
    }
  }
  return undefined;
};

console.log( singleNumber([4,1,2,1,2]) ) ; // 4 

// lets do a bit better on space, thanks to the great
// Robert Diamond. Dropping set manipulation. 

var singleNumberConst = function(nums) {  
    let seen = new Set([]);
    for( let val of nums ) {
      if (seen.has(val)) {
          seen.delete(val);
      } else {
          seen.add(val);
      }
    }
    return seen.entries().next().value[0]
}

console.log( singleNumberConst([4,1,2,1,2]) ) ; // 4 