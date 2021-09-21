// LC 704 Binary Search
/*

Given an array of integers nums which is sorted in ascending order, and an 
integer target, write a function to search target in nums. If target exists, 
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.


*/


var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor( ( start + end) / 2); // avg and round    

  while( nums[middle] !== target && start <= end)  {

    if ( target < nums[middle] ) { 
      end = middle - 1; // shift right pointer to where middle was before
    }
    else { 
      start = middle + 1; // shift left pointer to where middle was before 
    }

    middle = Math.floor( ( start + end) / 2); // recalculate middle 

  }
  
  // "Return the result of whole statement, either the element or -1 "
  return nums[middle] === target ? middle : -1;  
};