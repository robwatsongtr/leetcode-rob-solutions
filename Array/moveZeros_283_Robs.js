
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

// Most favored pattern: Two Pointers

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