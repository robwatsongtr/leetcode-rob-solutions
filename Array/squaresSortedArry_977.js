// Squares of a Sorted Array LC 977

// Given an integer array nums sorted in non-decreasing order, return 
// an array of the squares of each number sorted in non-decreasing order.

// THE PROBLEM IS NEGATIVE NUMBERS. that's why either some sort of
// separate sorting at the end is required, OR, for true linear time, you
// can do the squaring and use two pointers for comparison sorting 
// simultateously.


/**
* @param {number[]} nums
* @return {number[]}
*/

// Trival answers to warm up---------------------------------------- 

var sortedSquaresFor = function(nums) {

  let result = []

  for( i = 0; i < nums.length; i++) {
    result.push( nums[i] * nums[i] );
  }

  result.sort( (a, b) => a - b ) 
  return result; 

};

var sortedSquaresMap = function(nums) { 
  
  const result = nums.map( x => x * x ).sort( (a, b) => a - b ); 
  return result; 

};


// O(n) Answer -------------------------------------------------

var sortedSquaresLinearTime = function(nums) {

  let result = []

  // 'two pointers' for comparison 
  let begin = 0
  let end = nums.length - 1; 

  // make a current pointer, to start at end of array 
  let currentPtr = nums.length - 1; 


  // current poiner will run backwards from the end of array 
  // the beginnig and ending pointer will work towards 0 from opposite directions.
  while( currentPtr >= 0 ) {

    // if beginning squared result is greater than ending squared result 
    if( (nums[begin] * nums[begin]) > (nums[end] * nums[end]) ) {
      
      // assign beginning pointer to current pointer 
      result[currentPtr] = nums[begin] * nums[begin];

      currentPtr-- // decrement current
      begin++ // INCREMENT end
      
    } else { 

      // if beginning squared result is less than ending squared result
      // assign ending pointer to current pointer 
      result[currentPtr] = nums[end] * nums[end];

      currentPtr--; // decrement current
      end--; // DECREMENT end 
      
    }
    // console.log(result)
  }

  return result; 
    
};


// console.log( sortedSquaresFor( [-4,-1,0,3,10] ) ); 
// console.log( sortedSquaresMap( [-4,-1,0,3,10] ) ); 
console.log( sortedSquaresLinearTime( [-4,-1,0,3,10] ) );