/*
LC 989 Add to Array-Form of Integer

The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, 
return the array-form of the integer num + k.

Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

MUST USE BIGINT!!!!! NOT NUMBER()

*/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  // get a number by joining numbers into string then convert to number
  // Must use BigInt or else very large numbers won't work right
  const toNum = BigInt(num.join(''))

  // add the numbers, still use Bigint
  const added = toNum + BigInt(k)

  // convert the number to a string first, a callback takes each character of the 
  // string and converts it to a number, then its put into an array 
  const toArray = Array.from( String(added), n => Number(n) )

  return toArray
};


console.log( addToArrayForm( [2,7,4,3,6,4,2,4,7,5,3,2,2,5,7,5], 1) ) 