/*
Leetcode 136: Single Number

Given a non-empty array of integers nums, every element appears twice 
except for one. Find that single on
My approach: frequency counter / hash map 
*/

/**
 * @param {number[]} nums
 * @return {number}
*/


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

//----------

// lets do a bit better on space, thanks to the great
// Robert Diamond. Dropping set manipulation. 

var singleNumber2 = function(nums) {  
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

console.log( singleNumber2([4,1,2,1,2]) ) ; // 4 


// --------------
// okay the true constant space answwer: use XOR.
// This works becuaser XOR of a number with itself results in 0.
// and XOR of a number with 0 results in the number iself.

var singleNumberConst = function(nums) {
  return nums.reduce( (result, val) => result ^ val );
}
console.log( singleNumberConst( [4,1,2,1,2]) ) ; // 4 