// 27 Remove Element

/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
The order of the elements may be changed. 

Then return the number of elements in nums which are not equal to val.


Approach:

Loop through num array:

two pointers left and right: 

both start at 0, on the same element

if right is the value, skip it and loop to next element ( 'continue' loop)

if it's different than value, move right to left

increment left

when right reaches end, left becomes new length of modified array 

*/

var removeElement = (nums, val) => {
  let left = 0

  for( let right = 0; right < nums.length; right++ ) {
    if( nums[right] === val) {
      continue
    } 
    nums[left] = nums[right]
    left++
  } 

  return left 
}

console.log( removeElement([0,1,2,3,0,4,2], 2))