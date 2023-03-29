// LC 704 Binary Search
/*

Given an array of integers nums which is sorted in ascending order, and an 
integer target, write a function to search target in nums. If target exists, 
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.


*/


var binSearch = function(nums, target) {

  let lptr = 0;
  let rptr = nums.length - 1;
  let middle = Math.floor( ( lptr + rptr) / 2); // avg and round    

  while( nums[middle] !== target && lptr <= rptr)  {
    console.log(`left index: ${lptr} right index: ${rptr}  middle index: ${middle}`)
    if ( target < nums[middle] ) { 
      rptr = middle - 1; // shift right pointer to where middle was before
    }
    else { 
      lptr = middle + 1; // shift left pointer to where middle was before 
    }

    middle = Math.floor( ( lptr + rptr) / 2); // recalculate middle 

  }
  
  // return nums[middle] === target ? middle : -1;  

  if( nums[middle] === target ) {
    return (`found index: ${middle}` )
  } else {
    return 'not found'
  }

};

console.log( binSearch( [1,3,4,5,6,9,23], 6) )