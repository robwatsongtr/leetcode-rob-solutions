/*
1287. Element Appearing More Than 25% In Sorted Array

Given an integer array sorted in non-decreasing order, there 
is exactly one integer in the array that occurs more than 25% of the time, 
return that integer.

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6

Example 2:
Input: arr = [1,1]
Output: 1



*/


const findSpecialInteger = (arr)  => {
  if( arr.length == 1) return arr[0]
  let freq = 1 // there's at least one of a value in the array 
  // start the loop on the second element, in order to compare with the first element
  for( let i = 1; i < arr.length; i++ ) {
    // if the current number is the same as the previous number, increment frequency
    if( arr[i] === arr[i-1] ) {
      freq++
    } else {
      freq = 1
    }
    if( freq > arr.length/4 ) return arr[i] 
  }
  return -1 
};



console.log( findSpecialInteger([1,1,2,2,3,3,3,3]))