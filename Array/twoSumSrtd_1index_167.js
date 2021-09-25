// LC 167. 
// Two Sum II - Input array is sorted

/*

Given a 1-indexed array of integers numbers that is already sorted 
in non-decreasing order, find two numbers such that they add up to a 
specific target number. Let these two numbers be numbers[index1] 
and numbers[index2] where 1 <= first < second <= numbers.length.

The catch here is the 1 indexing, seems like 
*/ 


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
*/


var twoSum = function(numbers, target) {

    let leftPtr = 0;
    let rightPtr = numbers.length - 1;

    while( leftPtr < rightPtr ) {

      let sum = numbers[leftPtr] + numbers[rightPtr];

      // if the current sum is greater than target decrement right
      // becuase we're looking for a smaller number. conversely,
      // if the current sum is less than target increment right because
      // we're looking for a bigger number. 
      if( sum === target ) {
        return [ leftPtr + 1, rightPtr + 1 ] ;
      } else if ( sum > target ) {
        rightPtr--;
      } else {
        leftPtr++;
      }

    }

};

console.log( twoSum([-1, 0 ], -1) )