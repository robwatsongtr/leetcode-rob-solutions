// Squares of a Sorted Array LC 977

// Given an integer array nums sorted in non-decreasing order, return 
// an array of the squares of each number sorted in non-decreasing order.


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

  result.sort()

  return result; 

};

var sortedSquaresMap = function(nums) { 
  
  let result = nums.map( x => x * x ).sort(); 

  return result; 
};


// True O(n) Answer -------------------------------------------------

var sortedSquaresLinearTime = function(nums) {

  
    
};


console.log( sortedSquaresFor( [-4,-1,0,3,10] ) ); 
console.log( sortedSquaresMap( [-4,-1,0,3,10] ) ); 