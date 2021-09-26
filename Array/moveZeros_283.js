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
    console.log('before ', nums)
    if( nums[i] === 0) {
      nums.splice(i, 1);
    }

    console.log('after ', nums) ;
  }

  console.log(numZeros);

  // put the zeros on the end 
  for( i = 0; i < numZeros; i++ ) {
    nums.push(0);
  }

  return "result " + nums;
  
};

//--Robert's answers--------------------------------------------------

function moveZeroesRobert1(arr) {

  let numZeroes = 0;

  for (let i=0; i < arr.length; i++) {
      while (arr[i] === 0) {
          arr.splice(i, 1);
          numZeroes++;
      }
  }

  // spread operator to concatenate arrays
  arr.push(...new Array(numZeroes).fill(0)); 
  return arr;

}

function moveZeroesRobert2(arr) {

  let i = arr.length - 1

  while (i >= 0 && arr[i] === 0) i--
  while (i >= 0) {
      if (arr[i] === 0) {
          arr.splice(i,1)
          arr.push(0)
      }
      i--
  }

  return arr
  
}


// LC answer. 

// If the current element is not 0, then we need to
// append it just in front of last non 0 element we found. 
//
// Current is the 'fast pointer' that processes new elements one ahead
// of lastZeroNotFound at.
//
// If the newly found element is not a 0, we record it just after the 
// last found non-0 element. The position of last found non-0 element 
// is denoted by the slow pointer "lastNonZeroFoundAt" variable. 
// As we keep finding new non-0 elements, we just overwrite them at 
// the "lastNonZeroFoundAt + 1" 'th index. 
// 
// This overwrite will not result in any loss of data because we 
// already processed what was 
// there(if it were non-0,it already is now written at it's corresponding 
// index,or if it were 0 it will be handled later in time).
//
// After the "cur" index reaches the end of array, we now know that 
// all the non-0 elements have been moved to beginning of array in 
// their original order. Now comes the time to fulfil other requirement, 
// "Move all 0's to the end". We now simply need to fill all the indexes 
// after the "lastNonZeroFoundAt" index with 0.

var moveZeroes = function(nums) {

  let lastNonZeroFoundAt = 0;

  
  for (let cur = 0; cur < nums.length; cur++) {

    if (nums[cur] != 0) {
        nums[lastNonZeroFoundAt] = nums[cur];
        lastNonZeroFoundAt++
    }

    console.log(nums)
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



// console.log( moveZeroes( [ 0,1,0,3,12 ] ) );
// console.log( moveZeroes( [ 0,1,0 ] ) );
console.log( moveZeroesRob( [ 0,0,1 ] ) ); // returns [ 0,1,0,0 ]
// console.log( moveZeroes( [ 0 ] ) ); 
// console.log( moveZeroesRob( [ 0,0 ] ) ); // returns [ 0, 0, 0 ]