// Search insert position LC 35 easy 

/*

Given a sorted array of distinct integers and a target value, return the 
index if the target is found. If not, return the index where it would be 
if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Pattern used: Binary Search 

*/



var searchInsert = function(nums, target) {
  
  // set up pointers that will be doing the dividing and conquering
  let beginningPtr = 0; 
  let endingPtr = nums.length - 1; 
  let middlePtr

  // do a standard binary search. The loop will
  // return the correct index if found
  while( beginningPtr <= endingPtr ) {

    middlePtr = Math.floor( (beginningPtr + endingPtr) / 2); // recalculate middle;

    if( nums[middlePtr] === target ) return middlePtr;

    if( nums[middlePtr] > target ) {
      endingPtr = middlePtr - 1;
    } else {
      beginningPtr = middlePtr + 1; 
    }

  }

  // otherwise, return the beginning(left) pointer, which will
  // always be the index where the number would go.  
  return beginningPtr; 

}

console.log( searchInsert( [1], 0 ) ); 