/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Approach:

Hashmap / Frequency counter to get number of occurences of each element

loop through hashmap to find item at frequency at or greater than 50 percent of the number 
of elements in array and return 

*/


const majorityElement = (nums) => {
 
  let freqHash = {}
  let majorityVal = nums.length / 2 

  for( let val of nums ) {
    freqHash[val] = ( freqHash[val] || 0 ) + 1
  }

  for( let key in freqHash ) {
    if( freqHash[key] >= majorityVal ) 
    return key
  }

}


console.log( majorityElement([3,2,3]))