


// LC answer. FAST AND SLOW POINTER pattern.

// If the current element is not 0, then we need to
// append it just in front of last non 0 element we found. 
//
// Current is the 'fast pointer' that processes new elements one ahead
// of lastZeroNotFound at.
//
// If the newly found element is not a 0, we record it just after the 
// last found non-0 element. 

// The position of last found non-0 element is denoted by
// the slow pointer "lastNonZeroFoundAt" variable. 
// As we keep finding new non-0 elements, we just overwrite them at 
// the "lastNonZeroFoundAt + 1" 'th index. 
// 
// This overwrite will not result in any loss of data because we 
// already processed what was there(if it were non-0,it
// already is now written at it's correspondingindex,or if it were 0 
// it will be handled later in time).
//
// After the "cur" index reaches the end of array, we now know that 
// all the non-0 elements have been moved to beginning of array in 
// their original order. Now comes the time to fulfil other requirement, 
// "Move all 0's to the end". We now simply need to fill all the indexes 
// after the "lastNonZeroFoundAt" index with 0.

var moveZeroes = function(nums) {

  let lastNonZeroFoundAt = 0;

  for (let current = 0; current < nums.length; current++) {

    if (nums[current] != 0) {
        nums[lastNonZeroFoundAt] = nums[current];
        lastNonZeroFoundAt++
    }

    // console.log(nums)
  }

 	// After we have finished processing new elements,
 	// all the non-zero elements are already at beginning of array.
 	// We just need to fill remaining array with 0's.
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
    console.log(nums)
  }

  return nums; 

}



console.log( moveZeroes( [ 0,1,0,3,12 ] ) );
// console.log( moveZeroes( [ 0,1,0 ] ) );
// console.log( moveZeroesRob( [ 0,0,1 ] ) ); // returns [ 0,1,0,0 ]
// console.log( moveZeroes( [ 0 ] ) ); 
// console.log( moveZeroesRob( [ 0,0 ] ) ); // returns [ 0, 0, 0 ]