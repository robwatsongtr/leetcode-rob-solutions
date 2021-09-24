// Move Zeros. LC 283

/*

Given an integer array nums, move all 0's to the end of it while maintaining t
he relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

From the hint:

"A two-pointer approach could be helpful here. 
The idea would be to have one pointer for iterating the array and 
another pointer that just works on the non-zero elements of the array.""

*/

/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/

var moveZeroesRob = function(nums) {

  let numZeros = 0; 
  
  // count number of zeros
  for( i = 0; i < nums.length; i++ ) {

    if( nums[i] === 0) {
      numZeros++; 
    }

  }

  // remove zeros
  for( i = 0; i < nums.length; i++ ) {

    if( nums[i] === 0) {
      nums.splice(i, 1);
    }
  }

  console.log(numZeros);

  // put the zeros on the end 
  for( i = 0; i < numZeros; i++ ) {
    nums.push(0);
  }

  return nums;
  
};

var moveZeroes = function(nums) {

  let lastNonZeroFoundAt = 0;

  // If the current element is not 0, then we need to
  // append it just in front of last non 0 element we found. 
  for (let cur = 0; cur < nums.length; cur++) {
    if (nums[cur] != 0) {
        nums[lastNonZeroFoundAt] = nums[cur];
        lastNonZeroFoundAt++
      }
  }


 	// After we have finished processing new elements,
 	// all the non-zero elements are already at beginning of array.
 	// We just need to fill remaining array with 0's.
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums; 

}



console.log( moveZeroes( [ 0,1,0,3,12 ] ) );
console.log( moveZeroes( [ 0,1,0 ] ) );
console.log( moveZeroes( [ 0,0,1 ] ) ); // returns [ 0,1,0,0 ]
console.log( moveZeroes( [ 0 ] ) ); 
console.log( moveZeroes( [ 0,0 ] ) ); // returns [ 0, 0, 0 ]